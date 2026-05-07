$(document).ready(function() {
const detailsMap = {
    SF001: `
        <div class="details-content">
            <div class="detail-image-container">
                <img src="R.jpg" alt="سمك بوري مشوي" class="detail-image">
            </div>
            <div class="details-text">
                <div class="details-title">🍳 معلومات الوجبة</div>
                <strong>المطبخ:</strong> المصري<br>
                <strong>تصنيف الطعام:</strong> مأكولات بحرية مشوية<br>
                <strong>المكونات:</strong>
                <ul class="ingredients-list">
                    <li>4 سمكات بوري أحمر، مغسول ومنظف</li>
                    <li>بضعة أوراق من الأوريجانو الطازج</li>
                    <li>1 ملعقة صغيرة ملح طعام</li>
                    <li>1 ملعقة صغيرة فلفل أسود</li>
                    <li>صلصة خاصة: زيت زيتون، 3 فصوص ثوم، فلفل أحمر، 6 حبات طماطم، نصف ليمونة</li>
                </ul>
                <strong>⭐ السعر:</strong> 110,000 ل.س
            </div>
        </div>
    `,
    SF002: `
        <div class="details-content">
            <div class="detail-image-container">
                <img src="OIP.jpg" alt="طاجن سمك بالخضار" class="detail-image">
            </div>
            <div class="details-text">
                <div class="details-title">🍳 معلومات الوجبة</div>
                <strong>المطبخ:</strong> سوري - شامي<br>
                <strong>تصنيف الطعام:</strong> طاجن تقليدي<br>
                <strong>المكونات:</strong>
                <ul class="ingredients-list">
                    <li>فيليه سمك طازج</li>
                    <li>جزر، بطاطا، بصل</li>
                    <li>صلصة طماطم طبيعية</li>
                    <li>بهارات خاصة، ثوم، ليمون</li>
                </ul>
                <strong>⭐ السعر:</strong> 85,000 ل.س
            </div>
        </div>
    `,
    SF003: `
        <div class="details-content">
            <div class="detail-image-container">
                <img src="3.jpg" alt="سمك مقلي مع بطاطا" class="detail-image">
            </div>
            <div class="details-text">
                <div class="details-title">🍳 معلومات الوجبة</div>
                <strong>المطبخ:</strong> شرقي - حنّي<br>
                <strong>تصنيف الطعام:</strong> مقليات البحر<br>
                <strong>المكونات:</strong>
                <ul class="ingredients-list">
                    <li>سمك مقلي مقرمش</li>
                    <li>بطاطا مقلية</li>
                    <li>شرائح ليمون، ثوم مهروس</li>
                    <li>صلصة الطحينة السرية</li>
                </ul>
                <strong>⭐ السعر:</strong> 65,000 ل.س
            </div>
        </div>
    `,
    SF004: `
        <div class="details-content">
            <div class="detail-image-container">
                <img src="4.jpg" alt="تشكيلة مشاوي بحر" class="detail-image">
            </div>
            <div class="details-text">
                <div class="details-title">🍳 معلومات الوجبة</div>
                <strong>المطبخ:</strong> متوسطي - يوناني<br>
                <strong>تصنيف الطعام:</strong> مشاوي بحرية مشكلة<br>
                <strong>المكونات:</strong>
                <ul class="ingredients-list">
                    <li>جمبري طازج مشوي</li>
                    <li>كلماري مقلي</li>
                    <li>فيليه سمك</li>
                    <li>صلصة خاصة بالزعتر والليمون</li>
                </ul>
                <strong>⭐ السعر:</strong> 145,000 ل.س
            </div>
        </div>
    `,
    SF005: `
        <div class="details-content">
            <div class="detail-image-container">
                <img src="5.jpg" alt="مقبلات بحرية" class="detail-image">
            </div>
            <div class="details-text">
                <div class="details-title">🍳 معلومات الوجبة</div>
                <strong>المطبخ:</strong> لبناني - كمال<br>
                <strong>تصنيف الطعام:</strong> مقبلات بحرية<br>
                <strong>المكونات:</strong>
                <ul class="ingredients-list">
                    <li>كلماري مقلي مع الطحينة</li>
                    <li>جمبري مسلوق</li>
                    <li>صوص الثوم والليمون</li>
                    <li>سلطة الكول سلو الجانبية</li>
                </ul>
                <strong>⭐ السعر:</strong> 50,000 ل.س
            </div>
        </div>
    `
};
    $(".details-btn").click(function() {
        const id = $(this).data("id");
        const $detailsRow = $("#details-" + id);
        
        if ($detailsRow.length) {
            $detailsRow.remove();
            $(this).text("📋 إظهار التفاصيل");
        } else {
            const $currentRow = $("#row-" + id);
            $currentRow.after(`
                <tr id="details-${id}" class="details-row">
                    <td colspan="5">
                        <div style="padding: 10px; text-align: right; line-height: 1.8;">
                            ${detailsMap[id]}
                        </div>
                    </td>
                </tr>
            `);
            $(this).text("❌ إخفاء التفاصيل");
        }
    });

    function updateOrderSummary() {
        let selected = [];
        let total = 0;
        
        $(".select-meal:checked").each(function() {
            const name = $(this).data("name");
            const price = parseInt($(this).data("price"));
            selected.push({ name, price });
            total += price;
        });
        
        $("#selectedCount").text(selected.length);
        $("#totalPrice").text(total.toLocaleString());
        
        if (selected.length > 0) {
            let listHtml = '<ul style="list-style: none; padding: 0;">';
            selected.forEach(meal => {
                listHtml += `<li style="padding: 5px 0;">🍽️ ${meal.name} - ${meal.price.toLocaleString()} ل.س</li>`;
            });
            listHtml += '</ul>';
            $("#selectedMealsList").html(listHtml);
        } else {
            $("#selectedMealsList").html('<p style="color: #999;">لم يتم اختيار أي وجبة بعد</p>');
        }
    }
    
    $(".select-meal").change(updateOrderSummary);
    updateOrderSummary();

    $("#continueBtn").click(function() {
        if ($(".select-meal:checked").length === 0) {
            alert("⚠️ الرجاء اختيار وجبة واحدة على الأقل قبل المتابعة.");
            return;
        }
        
        $("#customerForm").slideDown("slow");
        $('html, body').animate({
            scrollTop: $("#customerForm").offset().top - 30
        }, 500);
    });

    $("#cancelFormBtn").click(function() {
        $("#customerForm").slideUp("slow");
        $("#errors").hide();
        $("#orderForm")[0].reset();
        $("#fullName, #bankAccount, #orderDate, #mobile").css("border-color", "");
    });
    
    $("#resetFormBtn").click(function() {
        $("#orderForm")[0].reset();
        $("#errors").hide();
        $("#fullName, #bankAccount, #orderDate, #mobile").css("border-color", "");
    });

    function validateName(name) {
        if (name === "") return true;
        return /^[A-Za-z]+ [A-Za-z]+$/.test(name);
    }
    
    function validateBankAccount(account) {
        return /^\d{6}$/.test(account);
    }
    
    function validateDate(date) {
        if (date === "") return true;
        const pattern = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
        if (!pattern.test(date)) return false;
        const parts = date.split("-");
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);
        const dateObj = new Date(year, month - 1, day);
        return dateObj.getFullYear() === year && dateObj.getMonth() === month - 1 && dateObj.getDate() === day;
    }
    
    function validateMobile(mobile) {
        if (mobile === "") return true;
        return /^(093|094|095)\d{7}$/.test(mobile);
    }
    
    $("#submitBtn").click(function() {
        const name = $("#fullName").val().trim();
        const account = $("#bankAccount").val().trim();
        const date = $("#orderDate").val().trim();
        const mobile = $("#mobile").val().trim();
        
        let errors = [];
        
        if (!validateName(name)) {
            errors.push("• الاسم يجب أن يكون حروف إنجليزية مع فراغ واحد بين الاسم والكنية");
            $("#fullName").css("border-color", "#d9534f");
        } else {
            $("#fullName").css("border-color", "");
        }
        
        if (!validateBankAccount(account)) {
            errors.push("• رقم الحساب المصرفي إجباري و6 خانات");
            $("#bankAccount").css("border-color", "#d9534f");
        } else {
            $("#bankAccount").css("border-color", "");
        }
        
        if (!validateDate(date)) {
            errors.push("• التاريخ غير صحيح (dd-mm-yyyy)");
            $("#orderDate").css("border-color", "#d9534f");
        } else {
            $("#orderDate").css("border-color", "");
        }
        
        if (!validateMobile(mobile)) {
            errors.push("• رقم الموبايل غير صالح (093/094/095)");
            $("#mobile").css("border-color", "#d9534f");
        } else {
            $("#mobile").css("border-color", "");
        }
        
        if (errors.length > 0) {
            $("#errors").html(errors.join("<br>")).show();
            return;
        }
        
        $("#errors").hide();
        
        const selectedMeals = [];
        let total = 0;
        $(".select-meal:checked").each(function() {
            const mealName = $(this).data("name");
            const mealPrice = parseInt($(this).data("price"));
            selectedMeals.push({ name: mealName, price: mealPrice });
            total += mealPrice;
        });
        
        const tax = total * 0.1;
        const netTotal = total - tax;
        
        let message = "=".repeat(40) + "\n";
        message += "🍽️ فاتورة الطلب - مطعم سمك بوري 🍽️\n";
        message += "=".repeat(40) + "\n\n";
        message += "📋 الوجبات المختارة:\n";
        
        selectedMeals.forEach((meal, index) => {
            message += `${index + 1}. ${meal.name}\n   السعر: ${meal.price.toLocaleString()} ل.س\n\n`;
        });
        
        message += "-".repeat(30) + "\n";
        message += `💰 المجموع الإجمالي: ${total.toLocaleString()} ل.س\n`;
        message += `🧾 الضريبة (10%): ${tax.toLocaleString()} ل.س\n`;
        message += `💵 المبلغ الصافي: ${netTotal.toLocaleString()} ل.س\n`;
        message += "=".repeat(40) + "\n🙏 شكراً لثقتكم بنا! 🙏\n";
        
        alert(message);
        
        $("#customerForm").slideUp();
        $(".select-meal").prop("checked", false);
        updateOrderSummary();
        $("#orderForm")[0].reset();
    });

    $("#bankAccount").on("input", function() {
        this.value = this.value.replace(/[^0-9]/g, "").slice(0, 6);
    });
    
    $("#mobile").on("input", function() {
        this.value = this.value.replace(/[^0-9]/g, "").slice(0, 10);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $("#backToTop").fadeIn();
        } else {
            $("#backToTop").fadeOut();
        }
    });
    
    $("#backToTop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    const publishLink = "https://boreefish-restaurant.github.io";
    $("#publishLinkText").text(publishLink);
    
    window.copyPublishLink = function() {
        navigator.clipboard.writeText(publishLink);
        alert("✅ تم نسخ الرابط: " + publishLink);
    };
});

