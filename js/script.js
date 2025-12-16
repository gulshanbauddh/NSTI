setTimeout(() => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}, 3000); 

const codeFiles = [
  { title: "Document Write", file: "codes/pg_1_document_write.html" },
  { title: "Script Inside Head", file: "codes/pg_2_scriptInsideHead.html" },
  { title: "External JavaScript", file: "codes/pg_2-externalJavaScript.html" },
  { title: "Inline JS", file: "codes/pg_3_inLineJs.html" },
  { title: "Inside Body Section", file: "codes/pg_3_insideBodySection.html" },
  {
    title: "Console Log & InnerHTML",
    file: "codes/pg_3_usingConsoleLog_InnerHTML.html",
  },
  {
    title: "Operators & Expression",
    file: "codes/pg_4_Operators&ExpressionInJs.html",
  },
  {
    title: "Operators Using Prompt & ParseInt",
    file: "codes/pg_5_Operators&ExpressionInJsUsingPromptAndParseInt.html",
  },
  { title: "Five Questions", file: "codes/Pg_7_and_11_(Five_Questions).html" },
  {
    title: "JS Code Using External JS",
    file: "codes/pg_7_JScodeUsingExternal_JS.html",
  },

  { title: "Check Even Or Odd", file: "codes/pg_14_CheckEvenOrOdd.html" },
  { title: "BMI Calculator", file: "codes/pg_15_BMI_calculator.html" },
  { title: "Quadratic Equation", file: "codes/pg_17_quadraticEquation.html" },
  {
    title: "Grade Mark Question",
    file: "codes/pg_19_GradeMarkQuestionSameToSameCollege.html",
  },
  {
    title: "Temperature Conversion",
    file: "codes/pg_23_TempratureConversion.html",
  },
  { title: "Electric Bill", file: "codes/pg_25_ElectricBill.html" },
  { title: "Salary Slip", file: "codes/pg_27_SalarySlip.html" },
  {
    title: "Check Positive Negative Or Zero",
    file: "codes/pg_29_(CheckPositive&NegativeOrZero).html",
  },
  { title: "Leap Year", file: "codes/pg_31_LeapYear.html" },
  {
    title: "Area of Different Side Triangle",
    file: "codes/pg_33_areaOfDifferentSideTriangle.html",
  },
  // {
  //   title: "Arithmetic Operation Using Switch Case",
  //   file: "codes/pg_35_Arthmatic_Operation_Using_SwitchCase.html",
  // },
  // { title: "Number To Word", file: "codes/pg_37_number_to_Word.html" },
  // {
  //   title: "Day Number To Display",
  //   file: "codes/pg_39_day_number_to_Display.html",
  // },
  // {
  //   title: "Input Number To Month In Word",
  //   file: "codes/pg_41_Input_No_to_Month_In_Word.html",
  // },
  // {
  //   title: "Colour Code To Colour Name",
  //   file: "codes/pg_44_ColourCode_to_ColourName.html",
  // },
  // {
  //   title: "Display Natural Number Below 20",
  //   file: "codes/pg_48_DisplayNaturalNumberBelow20.html",
  // },

  // {
  //   title: "Display Natural Number Below N",
  //   file: "codes/pg_49_DisplayNaturalNumberBelow_n.html",
  // },
  // {
  //   title: "Display Odd Number Upto 50",
  //   file: "codes/pg_50_DisplayOddNumberUpto_50.html",
  // },
  // {
  //   title: "Display Even Number Upto N",
  //   file: "codes/pg_51_DisplayEvenNumberUpto_n.html",
  // },
  // {
  //   title: "Multiples Of 10 Below 200",
  //   file: "codes/pg_52_Q5_MultiplesOf_10_below_200.html",
  // },
  // {
  //   title: "Multiplication Table Upto N",
  //   file: "codes/pg_53_Q6_Multiples_of_Table_upto_n.html",
  // },
  // {
  //   title: "Factorial Of Number",
  //   file: "codes/pg_54_Factorial_of_Number.html",
  // },
  // { title: "Factors Of Number", file: "codes/pg_55_Factor_of_Number.html" },
  // {
  //   title: "Sum Of Odd Numbers Below N",
  //   file: "codes/pg_57_sum_of_Odd_number_below_n.html",
  // },
  // {
  //   title: "Sum Of Even Numbers Below N",
  //   file: "codes/pg_58_sum_of_Even_number_below_n.html",
  // },
  // { title: "Reverse Of Number", file: "codes/pg_59_Reverse_of_a_Number.html" },
  // {
  //   title: "Reverse And Sum Of Number",
  //   file: "codes/pg_60_Reverse_and_Sum_of_a_Number.html",
  // },
  // {
  //   title: "Sum Of N Numbers Using Loop",
  //   file: "codes/pg_61_Sum_of_n_number_using_For_Loop.html",
  // },
  // { title: "Check Palindrome", file: "codes/pg_62_Q6_Check_Palindrome.html" },
  // {
  //   title: "Check Prime Or Not",
  //   file: "codes/pg_63_Q7_Check_Prime_or_Not.html",
  // },
  // {
  //   title: "Sum Of Even Numbers Between Limits",
  //   file: "codes/pg_64_Q8_sum_of_even_no_between_Limit_n1_to_n2.html",
  // },
  // {
  //   title: "Check Perfect Number",
  //   file: "codes/pg_65_Q9_check_Perfect_no_or_not.html",
  // },
  // {
  //   title: "Check Armstrong Number",
  //   file: "codes/pg_67_Q10_Check_no_is_armstrong_or_not.html",
  // },
  // {
  //   title: "Armstrong Numbers Between Limits",
  //   file: "codes/pg_69_Q1_Armstrong_number_between_to_Limit.html",
  // },
  // {
  //   title: "Perfect Numbers Between Limits",
  //   file: "codes/pg_71_Q2_Perfect_number_between_two_limit.html",
  // },
  // {
  //   title: "Prime Numbers Between Limits",
  //   file: "codes/pg_73_Q3_Prime_number_between_to_limit.html",
  // },
  // { title: "HCF And LCM", file: "codes/pg_75_Q4_HCF_and_LCM.html" },

  // {
  //   title: "Read And Display Array",
  //   file: "codes/pg_77_Read_and_Display_an_Array.html",
  // },
  // {
  //   title: "Even Odd Separation Using Array",
  //   file: "codes/pg_79_Even_Odd_Sepration_using_Seprate_Array.html",
  // },
  // {
  //   title: "Min Max Avg Using For Loop",
  //   file: "codes/pg_80_for_of_min_max_avg.html",
  // },
  // {
  //   title: "Find All Colors Using forEach",
  //   file: "codes/pg_81_find_all_color_using_forEach.html",
  // },
  // {
  //   title: "Insert And Find Colors Using forEach",
  //   file: "codes/pg_82_insert_and_find_all_color_using_forEach.html",
  // },

  // {
  //   title: "Swap Two Numbers Using Third Variable",
  //   file: "codes/pg_83_Q1_Swap_Two_Number_using_Third_Value.html",
  // },
  // {
  //   title: "Swap Two Numbers Without Third Variable",
  //   file: "codes/pg_84_Q2_Swap_Two_Number_Without_using_Third_Value.html",
  // },
  // {
  //   title: "Find LCM GCD HCF",
  //   file: "codes/pg_85_Q3_find_LCM_GCD_and_HCF.html",
  // },
  // {
  //   title: "Fibonacci Series Upto N",
  //   file: "codes/pg_86_Q4_fibonacci_Series_upto_n.html",
  // },
  // { title: "Sum Of Series", file: "codes/pg_87_Q5_sum_of_Series.html" },
  // {
  //   title: "Develop Pattern 1",
  //   file: "codes/pg_87_Q6_(a)_Develop_Pattern_1.html",
  // },
  // {
  //   title: "Develop Pattern 2",
  //   file: "codes/pg_88_Q6_(b)_Develop_Pattern_2.html",
  // },

  // {
  //   title: "Bubble Sort",
  //   file: "codes/pg_89_Q1_Sorting_Array_Bubble_Short.html",
  // },
  // { title: "Linear Search", file: "codes/pg_90_Q1_Perform_Linera_Search.html" },
  // {
  //   title: "Frequency Count In Array",
  //   file: "codes/pg_91_Q2_FrequencyCount_in_Array.html",
  // },
  // {
  //   title: "Count Positive Negative And Zero",
  //   file: "codes/pg_92_Q3_count_postiveNegativeAndZeroInArrayElement.html",
  // },
  // { title: "Binary Search", file: "codes/pg_94_binarySearch.html" },

  // {
  //   title: "Matrix Read And Display",
  //   file: "codes/pg_96_QA_matrixReadAndDisplay.html",
  // },
  // {
  //   title: "2D Array Addition Without Function",
  //   file: "codes/pg_97_QA_Addition_of_2D_Array(WithoutFun).html",
  // },
  // {
  //   title: "2D Array Addition With Function",
  //   file: "codes/pg_97_QB_Addition_of_2D_Array(WithFunction).html",
  // },
  // {
  //   title: "Matrix Multiplication",
  //   file: "codes/pg_99_Q3_multiplication_Of_Two_Matrix.html",
  // },
  // {
  //   title: "Transpose Of Matrix",
  //   file: "codes/pg_102_Transpose_of_matrix.html",
  // },
  // {
  //   title: "Diagonal Of Matrix",
  //   file: "codes/pg_104_Q5_diagonalOfMatrix.html",
  // },
  // {
  //   title: "Upper Triangular Matrix",
  //   file: "codes/pg_106_Q6_UpperTriangularMatrix.html",
  // },
  // { title: "Power Of Number", file: "codes/pg_108_Q7_power_of_Number.html" },
  // {
  //   title: "Factorial Using Recursion",
  //   file: "codes/pg_109_Q8_Factorial_using_Recursion.html",
  // },

  // {
  //   title: "Generate Random Number",
  //   file: "codes/pg_110_generateRandomNumber.html",
  // },
  // {
  //   title: "String Palindrome",
  //   file: "codes/pg_111_string_palindrom_or_not.html",
  // },
  // {
  //   title: "Search Substring",
  //   file: "codes/pg_112_search_Substring_in_main_string.html",
  // },
  // { title: "Object Literal", file: "codes/pg_113_Q1_object_literal.html" },
  // {
  //   title: "Employee Details Using Object Constructor",
  //   file: "codes/pg_115_Q3_EmployeeDetails_ObjectConstructor.html",
  // },
  // {
  //   title: "Employee Name Using Array Object",
  //   file: "codes/pg_116_Q4_EmployeeNameUsing_Array_Object.html",
  // },
  // {
  //   title: "Creating An Array Using New Array Method",
  //   file: "codes/pg_116_Q5_creatingAnArrayusing_new_Array_Method.html",
  // },
  // {
  //   title: "Product Details Using Constructor Method",
  //   file: "codes/pg_117_Q6_ProductDetails_constructorMethod.html",
  // },
  // {
  //   title: "Employee Details Using Array Constructor",
  //   file: "codes/pg_119_Q7_employeeDetails_UsingArrayConstructor.html",
  // },

  // {
  //   title: "Enter Name And Print Name In Alert",
  //   file: "codes/pg_121_Q8_EnterNameAndPrintNameInAlert_form1_name_value.html",
  // },
  // {
  //   title: "Counting Number Of Para",
  //   file: "codes/pg_121_Q9_CountingNumberOfPara.html",
  // },
  // { title: "Count Of Genders", file: "codes/pg_122_Q10_CountOfGenders.html" },
  // {
  //   title: "Self Count Of Genders (Output Gender Name)",
  //   file: "codes/pg_122_SELF_CountOfGenders(outputGenderName).html",
  // },
  // {
  //   title: "Display Hobbies Using getElementById",
  //   file: "codes/pg_123_Q11_displayHobbies(getElementById).html",
  // },

  // {
  //   title: "Display Name And Age Of A Person",
  //   file: "codes/pg_125_Q12_DisplayNameAndAgeOfaPerson.html",
  // },
  // {
  //   title: "User Id And Password Form Validation",
  //   file: "codes/pg_126_UserIdAndPassword_FormValidation.html",
  // },
  // {
  //   title: "Self Form Validation",
  //   file: "codes/pg_127_Self_formValidation.html",
  // },
  // {
  //   title: "Students Registration Form Validation",
  //   file: "codes/pg_128_studentsRegistration_formValidation.html",
  // },

  // {
  //   title: "Cookies CRUD Operations",
  //   file: "codes/pg_133_cookies_CRUD_operations.html",
  // },
  // {
  //   title: "User Input Cookies CRUD Operations",
  //   file: "codes/pg_133_User_Input_cookies_CRUD_operations.html",
  // },

  // {
  //   title: "Exception Handling",
  //   file: "codes/pg_135_Q1_Exception_handling.html",
  // },
  // {
  //   title: "Exception Handling (Example 2)",
  //   file: "codes/pg_136_Q2_Exception_handling.html",
  // },
  // { title: "Try Catch Finally", file: "codes/pg_137_Q3_try_catch_final.html" },
  // {
  //   title: "Try Catch Finally (Example 2)",
  //   file: "codes/pg_138_Q4_try_catch_final.html",
  // },

  // {
  //   title: "Change Color And Font Color Using Button (CSS)",
  //   file: "codes/pg_139_Q1_changeColorAndFontColorUsingButton(CSS).html",
  // },
  // {
  //   title: "Change Color And Font Color Using Button (CSS - Example 2)",
  //   file: "codes/pg_140_Q2_changeColorAndFontColorUsingButton(CSS).html",
  // },

  // {
  //   title: "Ajax Send Product Details To Server",
  //   file: "codes/pg_141_Q1_Ajax_toSendProductDetailsToServer.html",
  // },
  // {
  //   title: "Ajax Submit Customer Details To Server",
  //   file: "codes/pg_143_Q2_Ajax_ToSubmitCustomerDetailsToServer.html",
  // },

  // { title: "Time And Date", file: "codes/pg_145_timeAndDate.html" },
];

const container = document.getElementById("container");

codeFiles.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${index + 1}. ${item.title}</h3>

    <div class="actions">
      <button onclick="copyCode(${index})">Copy Code</button>
      <button onclick="showOutput('${item.file}')">Show Output</button>
    </div>

    <pre><code class="language-html" id="code-${index}"></code></pre>
  `;

  container.appendChild(card);

  fetch(item.file)
    .then((res) => res.text())
    .then((code) => {
      document.getElementById(`code-${index}`).textContent = code;
      Prism.highlightAll();
    });
});

/* COPY CODE */
function copyCode(index) {
  const code = document.getElementById(`code-${index}`).textContent;
  navigator.clipboard.writeText(code);
  alert("Code copied successfully!");
}

/* SHOW OUTPUT IN NEW TAB */
function showOutput(file) {
  window.open(file, "_blank");
}

//Dark Mode Toggle
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggleBtn.textContent = "🌞 Light";
  } else {
    toggleBtn.textContent = "🌙 Dark";
  }
});

// Scroll
const indexPanel = document.getElementById("indexPanel");

/* Title */
indexPanel.innerHTML = `<h2>📚 Program Index</h2>`;

/* Auto create index */
codeFiles.forEach((item, index) => {
  // card ko unique id dena (existing card hi use hoga)
  const cardId = `program-${index}`;

  // thoda delay taki cards pehle ban jaaye
  setTimeout(() => {
    const cards = document.querySelectorAll(".card");
    if (cards[index]) {
      cards[index].id = cardId;
    }
  }, 0);

  // index link
  const link = document.createElement("a");
  link.href = `#${cardId}`;
  link.textContent = `${index + 1}. ${item.title}`;

  indexPanel.appendChild(link);
});

// go to top button
const topBtn = document.getElementById("topBtn");

// Show button when user scrolls down
window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Scroll to top
function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

