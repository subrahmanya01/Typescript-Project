import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListDocument } from "./classes/ListDocument.js";
const form = document.querySelector(".form-group");
let Type = document.querySelector("#Type");
let ToFrom = document.querySelector("#to-from");
let Details = document.querySelector("#Details");
let Amount = document.querySelector("#amount");
let ulElement = document.querySelector("#item_list");
let ListDoc = new ListDocument(ulElement);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    var doc;
    if (Type.value == "Invoice") {
        doc = new Invoice(ToFrom.value, Details.value, Amount.valueAsNumber);
        ListDoc.render(doc, "Invoice", "start");
    }
    else if (Type.value == "Payment") {
        doc = new Payment(ToFrom.value, Details.value, Amount.valueAsNumber);
        ListDoc.render(doc, "Payment", "start");
    }
});
