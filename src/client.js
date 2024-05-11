// 記帳本API

// 取得會員ID
async function GetMember() {
    const response = await fetch('https://localhost:7185/api/Member/GetMember')
    const data = await response.json();
    console.log(data)

    let showData = document.getElementById('showData')
    showData.innerHTML = JSON.stringify(data)
}

GetMember()