import unittest
import http.client
import json

BASE_URL = "reqres.in"

class TestReqresAPI(unittest.TestCase):

    def make_request(self, method, path, body=None, headers=None):
        conn = http.client.HTTPSConnection(BASE_URL)
        if headers is None:
            headers = {"Content-Type": "application/json"}
        if body is not None:
            body = json.dumps(body)
        conn.request(method, path, body, headers)
        response = conn.getresponse()
        data = response.read().decode()
        if data:
            data = json.loads(data)
        conn.close()
        return response.status, data

    def test_get_users_list(self):
        status, data = self.make_request("GET", "/api/users?page=2")
        self.assertEqual(status, 200)
        self.assertIn('data', data)

    def test_get_single_user(self):
        status, data = self.make_request("GET", "/api/users/2")
        self.assertEqual(status, 200)
        self.assertIn('data', data)

    def test_get_single_user_not_found(self):
        status, data = self.make_request("GET", "/api/users/23")
        self.assertEqual(status, 404)

    def test_create_user(self):
        payload = {
            "name": "morpheus",
            "job": "leader"
        }
        status, data = self.make_request("POST", "/api/users", body=payload)
        self.assertEqual(status, 201)
        self.assertIn('id', data)
        self.assertEqual(data['name'], payload['name'])
        self.assertEqual(data['job'], payload['job'])

    def test_update_user_put(self):
        payload = {
            "name": "morpheus",
            "job": "zion resident"
        }
        status, data = self.make_request("PUT", "/api/users/2", body=payload)
        self.assertEqual(status, 200)
        self.assertEqual(data['name'], payload['name'])
        self.assertEqual(data['job'], payload['job'])

    def test_update_user_patch(self):
        payload = {
            "job": "zion resident"
        }
        status, data = self.make_request("PATCH", "/api/users/2", body=payload)
        self.assertEqual(status, 200)
        self.assertEqual(data['job'], payload['job'])

    def test_delete_user(self):
        status, data = self.make_request("DELETE", "/api/users/2")
        self.assertEqual(status, 204)

    def test_register_successful(self):
        payload = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
        status, data = self.make_request("POST", "/api/register", body=payload)
        self.assertEqual(status, 200)
        self.assertIn('id', data)
        self.assertIn('token', data)

    def test_register_unsuccessful(self):
        payload = {
            "email": "sydney@fife"
        }
        status, data = self.make_request("POST", "/api/register", body=payload)
        self.assertEqual(status, 400)
        self.assertIn('error', data)

    def test_login_successful(self):
        payload = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
        status, data = self.make_request("POST", "/api/login", body=payload)
        self.assertEqual(status, 200)
        self.assertIn('token', data)

    def test_login_unsuccessful(self):
        payload = {
            "email": "peter@klaven"
        }
        status, data = self.make_request("POST", "/api/login", body=payload)
        self.assertEqual(status, 400)
        self.assertIn('error', data)

    def test_get_delayed_response(self):
        status, data = self.make_request("GET", "/api/users?delay=3")
        self.assertEqual(status, 200)
        self.assertIn('data', data)

if __name__ == "__main__":
    unittest.main()
