let btn = document.querySelectorAll('button');
btn.forEach((btn2) => {
    btn2.addEventListener('click', () => {
        let a = btn2.parentElement.querySelector('h5').textContent;
        let b = prompt(`${a} nechta zakaz qilmoqchisiz?`);
        if (b) {
            switch (a) {
                case "Qiyqiriq сет":
                    confirm(`${b} ta ${a} jami narxi ${b*45000} som \n \n maqsulotni zakaz qilasizmi?`);
                    alert("zakaz qabul qilindi!")
                    break;
                case "Снек сет":
                    confirm(`${b} ta ${a} jami narxi ${b*79000} som \n \n maqsulotni zakaz qilasizmi?`);
                    alert("zakaz qabul qilindi!")
                    break;
                case "Классик сет":
                    confirm(`${b} ta ${a} jami narxi ${b*34000} som \n \n maqsulotni zakaz qilasizmi?`);
                    alert("zakaz qabul qilindi!")
                    break;
                case "Лонгер рингс сет":
                    confirm(`${b} ta ${a} jami narxi ${b*45000} som \n \n maqsulotni zakaz qilasizmi?`);
                    alert("zakaz qabul qilindi!")
                    break;
                case "Биг сет":
                    confirm(`${b} ta ${a} jami narxi ${b*62000} som \n \n maqsulotni zakaz qilasizmi?`);
                    alert("zakaz qabul qilindi!")
                    break;
                case "Лестер сет":
                    confirm(`${b} ta ${a} jami narxi ${b*53000} som \n \n maqsulotni zakaz qilasizmi?`);
                    alert("zakaz qabul qilindi!")
                    break;
                case "Скул сет":
                    confirm(`${b} ta ${a} jami narxi ${b*36000} som \n \n maqsulotni zakaz qilasizmi?`);
                    alert("zakaz qabul qilindi!")
                    break;
                case "Комбо сет Большой":
                    confirm(`${b} ta ${a} jami narxi ${b*20000} som \n \n maqsulotni zakaz qilasizmi?`);
                    alert("zakaz qabul qilindi!")
                    break;
                case "Куринный Биг сет":
                    confirm(`${b} ta ${a} jami narxi ${b*67000} som \n \n maqsulotni zakaz qilasizmi?`);
                    alert("zakaz qabul qilindi!")
                    break;
                case "острый сет":
                    confirm(`${b} ta ${a} jami narxi ${b*50000} som \n \n maqsulotni zakaz qilasizmi?`);
                    alert("zakaz qabul qilindi!")
                    break;
                case "маленький сет":
                    confirm(`${b} ta ${a} jami narxi ${b*48000} som \n \n maqsulotni zakaz qilasizmi?`);
                    alert("zakaz qabul qilindi!")
                    break;
                case "Куринный сет Большой":
                    confirm(`${b} ta ${a} jami narxi ${b*99000} som \n \n maqsulotni zakaz qilasizmi?`);
                    alert("zakaz qabul qilindi!")
                    break;
                default:
                    confirm("bunday set mavjud emas");
                    break;
            }
        }
    });
});
