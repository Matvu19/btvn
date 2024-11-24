function danhSach(){
    const thanhVien = [
        { hoTen: "Trương Minh Sơn", gioiTinh: "Nam", noiSinh: "Hải Dươngg" },
        { hoTen: "Nguyễn Hữu Huy", gioiTinh: "Nam", noiSinh: "Hà Nội" },
        { hoTen: "Nguyễn Ngọc Phước", gioiTinh: "Nam", noiSinh: "Nam Định" },
    ];

    const table = document.getElementById('danhSach');

    table.innerHTML = `
    <tr>
        <th>Họ Tên</th>
        <th>Giới Tính</th>
        <th>Nơi Sinh</th>
    </tr>
`;

// Thêm dữ liệu thành viên vào bảng
    for (const tv of thanhVien) {
        const row = `
        <tr>
            <td>${tv.hoTen}</td>
            <td>${tv.gioiTinh}</td>
            <td>${tv.noiSinh}</td>
        </tr>
    `;
        table.innerHTML += row;
    }
}