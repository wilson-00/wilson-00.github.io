let elNamaPengguna = document.getElementById("namaPengguna")
elNamaPengguna.addEventListener("keyup",function(){
    elNamaPengguna.value = elNamaPengguna.value.toUpperCase();
})

let elKataLaluan = document.getElementById("kataLaluan")
elKataLaluan.onblur = checkPassword

function checkPassword() {
    let elKL = document.getElementById("kataLaluan")
    let pass_val = elKL.value

    if(pass_val.length > 5) {
        alert("Password A-Ok!")
    } else {
        alert("Password is too short!")
    }
}