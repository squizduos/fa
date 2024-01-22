

function FilterForm() {
    return (
        <div className="d-flex d-flex-row row align-items-center flex-wrap border-bottom">

        <div class="input-group date m-3 col" data-provide="datepicker">
          <label for="dateFrom" class="form-label label">С даты</label>
          <input type="text" class="form-control" id="dateFrom" />
          <div class="input-group-addon">
              <span class="glyphicon glyphicon-th"></span>
          </div>
        </div>


        <div class="input-group date m-3 col" data-provide="datepicker">
          <label for="dateTo" class="form-label label">По дату</label>
          <input type="text" class="form-control" id="dateTo" />
          <div class="input-group-addon">
              <span class="glyphicon glyphicon-th"></span>
          </div>
        </div>
        
        <div class="input-group m-3 col">
          <label for="itemType" class="form-label label">Виды занятия</label>

          <select class="form-select" aria-label="Default select example" id="itemType">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    );
}

export default FilterForm;