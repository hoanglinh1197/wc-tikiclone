window.onload = function () {
  console.log(sessionStorage.getItem("username")+"\t");
  if (sessionStorage.getItem("username") !== null) {
    document.getElementById("labelLginModal").innerText = sessionStorage.getItem(
      "username"
    );
  }
};

function isPhoneValid(phoneNum) {
  let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  let user = phoneNum.value;
  let isValid = true;
  if (user !== "") {
    if (!user.match(vnf_regex)) {
      isValid = false;
    }
  } else {
    isValid = false;
  }
  return isValid;
}

function isEmailValid(email) {
  const tail = "@gmail.com";
  return email.value.endsWith(tail);
}

function showWarning(input, botLine, textbLine) {
  input.className = "form-control border-danger";
  botLine.innerText = textbLine;
  botLine.style.color = "red";
  botLine.style.fontSize = "10px";
}

function hideWarning(input, botLine) {
  input.className = "form-control";
  botLine.innerText = "";
  botLine.style.color = "white";
  botLine.style.fontSize = "0px";
}

function emailValid(id, idBotLine) {
  let email = document.getElementById(id);
  let botLine = document.getElementById(idBotLine);
  let isValid = isEmailValid(email) || isPhoneValid(email);

  if (!isValid) {
    showWarning(email, botLine, "*Email/SĐT phải đúng định dạng");
  } else {
    hideWarning(email, botLine, "");
  }
}

function isPwdValid(pwd) {
  let format = /^[A-Za-z]\w{6,14}$/;
  return pwd.match(format);
}

function pwdValid(id, idBotLine) {
  let pwd = document.getElementById(id);
  let botLine = document.getElementById(idBotLine);
  let isValid = isPwdValid(pwd.value);
  if (!isValid) {
    showWarning(
      pwd,
      botLine,
      "Password phải từ 7 đến 14 ký tự, không dùng kí tự đặc biệt"
    );
  } else {
    hideWarning(pwd, botLine);
  }
}

function phoneValid(id,idBotLine){
  let phone = document.getElementById(id);
  let botLine = document.getElementById(idBotLine);
  if(!isPhoneValid(phone)){
    showWarning(
      phone,
      botLine,
      "Số điện thoại phải đúng định dạng"
    );
  }else{
    hideWarning(phone, botLine);
  }
}


function nameValid(id, idBotLine){
  let name = document.getElementById(id);
  let botLine = document.getElementById(idBotLine);
  let isValid = isPwdValid(name.value);
  if (!isValid) {
    showWarning(
      name,
      botLine,
      "Tên phải từ 7 đến 14 ký tự, không dùng kí tự đặc biệt"
    );
  } else {
    hideWarning(name, botLine);
  }
}
// function isSubmit(id) {
//   let submit = document.getElementById(id);
//   return isEmailValid() && isPhoneValid() && isPwdValid();
// }

function isExist(email, pwd) {
  let isExist = false;
  users.forEach((ele) => {
    if ((ele.email == email || ele.phone == email) && pwd == ele.password) {
      console.log(ele.email);
      isExist = true;
    }
  });
  return isExist;
}


function preventReload(event) {
  event.preventDefault();
  users.forEach((ele) => console.log(ele.email));
  let email = document.getElementById("lgin-email").value;
  let pwd = document.getElementById("lgin-pwd").value;
  let prevPath = sessionStorage.getItem('prevPage');
  if (isExist(email, pwd)) {
    sessionStorage.setItem(
      "username",
      email.slice(0, email.length - "@gmail.com".length)+" (logout)"
    );

    location.replace(
      prevPath !== null?prevPath:"index.html"
    );
  }else{
    alert("Đăng nhập thất bại");
    location.replace(
      window.location.href
    );
  }
}

function preventReloadSgIn(event) {
  event.preventDefault();
  let ismale = document.getElementById('maleRadio').checked;
  let name = document.getElementById('sgin-name');
  let phone =  document.getElementById('sgin-phone');
  let email = document.getElementById('sgin-email');
  let pwd =  document.getElementById('sgin-pwd');

  let num = users.length;
  addUser(new User(name.value,phone.value,email.value,pwd.value,ismale ? 'Nam' : 'Nữ'))
  if(num != users.length){
    alert("Đăng kí thành công");
    location.replace(
      window.location.href
    );
    users.forEach(i => console.log(i.email));
  } 
}
