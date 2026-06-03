async function hitung() {
  const jumlah = document.getElementById("jumlah").value;
  const jenis = document.getElementById("jenis").value;

  const url = "https://func-serverless-0920240015-eshmctf3hfb9bbew.eastasia-01.azurewebsites.net/api/HttpPraktikum";

  const response = await fetch(`${url}?jumlah=${jumlah}&jenis=${jenis}`);
  const data = await response.json();

  document.getElementById("hasil").innerText =
    JSON.stringify(data, null, 2);
}
