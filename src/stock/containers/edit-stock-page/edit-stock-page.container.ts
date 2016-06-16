import {Component} from "@angular/core";
@Component({
    selector: "add-stock-page",
    template: `
    <default-page>
        <main>
            <div class="row">
                <div class="col-sm-12">
                    <h1><i class="fa fa-pencil"></i>&nbsp;Edit wine</h1>
                </div>
             </div>
             <div class="row">
                <detail-wine-form></detail-wine-form>
            </div>
        </main>
    </default-page>
     `
})
export class EditStockPage {

}