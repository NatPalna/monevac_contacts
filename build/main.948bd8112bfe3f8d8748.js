/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const form = document.querySelector(\".form\");\r\nconst inputList = Array.from(form.querySelectorAll(\".form__type-input\"));\r\nconst checkboxElement = form.querySelector(\".form__type-checkbox\");\r\nconst buttonElement = form.querySelector(\".button\");\r\nconst formErrorElement = form.querySelector(\".form__empty-error\");\r\n\r\nstartValidation();\r\n\r\nfunction startValidation() {\r\n  toggleButton();\r\n  form.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n    if (hasInvalidInput()) {\r\n      formError();\r\n      inputList.forEach((inputElement) => {\r\n        checkInputValidity(inputElement);\r\n        toggleInputError(inputElement);\r\n      });\r\n      toggleInputError(checkboxElement);\r\n    }\r\n  });\r\n  inputList.forEach((inputElement) => {\r\n    inputElement.addEventListener(\"input\", () => {\r\n      checkInputValidity(inputElement);\r\n      toggleButton();\r\n    });\r\n    inputElement.addEventListener(\"blur\", () => {\r\n      toggleInputError(inputElement);\r\n    });\r\n    inputElement.addEventListener(\"focus\", () => {\r\n      toggleErrorSpan(inputElement);\r\n    });\r\n    checkboxElement.addEventListener(\"change\", () => {\r\n      toggleInputError(checkboxElement);\r\n      toggleButton();\r\n    });\r\n  });\r\n}\r\n\r\nfunction checkInputValidity(inputElement) {\r\n  if (inputElement.validity.patternMismatch) {\r\n    inputElement.setCustomValidity(inputElement.dataset.errorMessage);\r\n  } else {\r\n    inputElement.setCustomValidity(checkLengthMismatch(inputElement));\r\n  }\r\n}\r\n\r\nfunction checkLengthMismatch(inputElement) {\r\n  if (inputElement.type !== \"text\") {\r\n    return \"\";\r\n  }\r\n  const valueLength = inputElement.value.trim().length;\r\n  if (valueLength < inputElement.minLength) {\r\n    return `Минимальное количество символов: ${inputElement.minLength}`;\r\n  }\r\n  return \"\";\r\n}\r\n\r\nfunction hasInvalidInput() {\r\n  return (\r\n    inputList.some((inputElement) => !inputElement.validity.valid) ||\r\n    !checkboxElement.validity.valid\r\n  );\r\n}\r\n\r\nfunction toggleErrorSpan(inputElement, errorMessage) {\r\n  const errorElement = document.querySelector(`.${inputElement.id}-error`);\r\n  if (errorMessage) {\r\n    inputElement.classList.add(\"form__type-input-error\");\r\n    errorElement.textContent = errorMessage;\r\n    errorElement.classList.add(\"form__error-active\");\r\n  } else {\r\n    inputElement.classList.remove(\"form__type-input-error\");\r\n    errorElement.textContent = \"\";\r\n    errorElement.classList.remove(\"form__error-active\");\r\n  }\r\n}\r\n\r\nfunction toggleButton() {\r\n  if (hasInvalidInput()) {\r\n    buttonElement.classList.add(\"button-inactive\");\r\n    buttonElement.setAttribute(\"aria-disabled\", \"true\");\r\n  } else {\r\n    buttonElement.classList.remove(\"button-inactive\");\r\n    buttonElement.setAttribute(\"aria-disabled\", \"false\");\r\n    formErrorElement.textContent = \"\";\r\n  }\r\n}\r\n\r\nfunction formError() {\r\n  const errorMessage = \"Заполните все поля для отправки формы.\";\r\n  formErrorElement.textContent = errorMessage;\r\n}\r\n\n\n//# sourceURL=webpack://monevac/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;