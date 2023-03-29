import { Invoice } from "./classes/Invoice.js";
import {Payment} from "./classes/Payment.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";
import { ListDocument } from "./classes/ListDocument.js";

const form = document.querySelector(".form-group") as HTMLFormElement;

let Type = document.querySelector("#Type") as HTMLSelectElement;
let ToFrom = document.querySelector("#to-from") as HTMLInputElement;
let Details = document.querySelector("#Details") as HTMLInputElement;
let Amount = document.querySelector("#amount") as HTMLInputElement;

let ulElement = document.querySelector("#item_list") as HTMLUListElement;

let ListDoc = new ListDocument(ulElement);

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    var doc:HasFormatter
    if(Type.value =="Invoice")
    {
       doc = new Invoice(ToFrom.value,Details.value,Amount.valueAsNumber);
       ListDoc.render(doc,"Invoice","start");
    }
    else if(Type.value =="Payment")
    {
       doc = new Payment(ToFrom.value,Details.value,Amount.valueAsNumber);
       ListDoc.render(doc,"Payment","start");
    }
    
})