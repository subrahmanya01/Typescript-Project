export class ListDocument {
    constructor(container) {
        this.container = container;
    }
    render(item, Heading, pos) {
        console.log(item);
        let li = document.createElement("li");
        let div1 = document.createElement("div");
        li.append(div1);
        let h5 = document.createElement("h5");
        h5.innerText = Heading;
        if (Heading == "Invoice")
            h5.classList.add("card-header", "text-primary");
        else
            h5.classList.add("card-header", "text-danger");
        div1.append(h5);
        div1.classList.add("card");
        let div2 = document.createElement("div");
        div2.classList.add("card-body");
        div1.append(div2);
        let paragraph = document.createElement("div");
        paragraph.innerText = item.format();
        paragraph.classList.add("card-text");
        div2.append(paragraph);
        console.log(li);
        if (pos == "start")
            this.container.append(li);
        else
            this.container.append(li);
    }
}
