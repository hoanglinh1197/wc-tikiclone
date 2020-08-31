var danhmucs = [];
var danhmuccons1 = [];
var danhmuccons2 = [];
var danhmuccons3 = [];
var danhmuccons4 = [];
var danhmuccons5 = [];
var danhmuccons6 = [];
var danhmuccons7 = [];
var danhmuccons8 = [];
var danhmuccons9 = [];
var danhmuccons10 = [];
var danhmuccons11 = [];
var danhmuccons12 = [];
var danhmuccons13 = [];
var danhmuccons14 = [];
var danhmuccons15 = [];
var danhmuccons16 = [];

var dealHot = [];

var industry = [];

var keyHot = [];

class DanhMuc {
    constructor(ten, code, icon, img, ...danhmuccon) {
        this.ten = ten;
        this.code = code;
        this.icon = icon;
        this.img = img;
        this.danhmuccon = danhmuccon;
    }

}

class DanhMucCon {
    constructor(ten, code, type) {
        this.ten = ten;
        this.code = code;
        this.type = type;
    }
}

class DealHot {
    constructor(title, price1, price2, percent, quantitySale, img, link) {
        this.title = title;
        this.price1 = price1;
        this.price2 = price2;
        this.percent = percent;
        this.quantitySale = quantitySale;
        this.img = img;
        this.link = link;
    }

}
class Industry{
    constructor(title,img,link){
        this.title = title;
        this.img = img;
        this.link = link
    }
}
class KeyHot{
    constructor(title,color,link){
        this.title = title;
        this.color = color;
        this.link = link
    }
}
function dataMenu() {

    danhmuccons1.push(new DanhMucCon('Xu hướng', 'xh', 'title'));
    danhmuccons1.push(new DanhMucCon('Samsung Galaxy S20 Plus', 'sss20plus', 'item'));
    danhmuccons1.push(new DanhMucCon('Samsung Galaxy A51', 'ssa51', 'item'));
    danhmuccons1.push(new DanhMucCon('Samsung Galaxy M11', 'ssm11', 'item'));
    danhmuccons1.push(new DanhMucCon('Samsung Galaxy A31', 'ssa31', 'item'));
    danhmuccons1.push(new DanhMucCon('iPhone 11', 'ip11', 'item'));
    danhmuccons1.push(new DanhMucCon('iPad 10.2', 'ipa102', 'item'));
    danhmuccons1.push(new DanhMucCon('iPad Mini 5', 'ipamn5', 'item'));
    danhmuccons1.push(new DanhMucCon('Samsung Galaxy A11', 'ssa11', 'item'));
    danhmuccons1.push(new DanhMucCon('Samsung Galaxy A20s', 'ssa20s', 'item'));
    danhmuccons1.push(new DanhMucCon('iPhone 11 Pro Max 64GB', 'ip11pro', 'item'));
    danhmuccons1.push(new DanhMucCon('Vsmart Active 3', 'vsa3', 'item'));
    danhmuccons1.push(new DanhMucCon('Realme 3 Pro', 'rem3pro', 'item'));
    danhmuccons1.push(new DanhMucCon('Galaxy Note 10 Plus', 'ssglxn10', 'item'));
    danhmuccons1.push(new DanhMucCon('OPPO A9', 'oppa9', 'item'));
    danhmuccons1.push(new DanhMucCon('iPhone SE 64GB', 'ipse64', 'item'));
    danhmuccons1.push(new DanhMucCon('Xiaomi Redmi Note 8', 'xmn8', 'item'));
    danhmuccons1.push(new DanhMucCon('Realme C3i', 'rmc3i', 'item'));
    danhmuccons1.push(new DanhMucCon('Realme 5 Pro', 'rm5pro', 'item'));
    danhmuccons1.push(new DanhMucCon('VIVO Y91C', 'vvy91c', 'item'));
    danhmuccons1.push(new DanhMucCon('Nổi bật', 'nb', 'title'));
    danhmuccons1.push(new DanhMucCon('Oppo A31', 'oppa31', 'item'));
    danhmuccons1.push(new DanhMucCon('Oppo A12', 'oppa12', 'item'));
    danhmuccons1.push(new DanhMucCon('Oppo Reno 3', 'opprn3', 'item'));
    danhmuccons1.push(new DanhMucCon('Vsmart Joy 3', 'vsj3', 'item'));
    danhmuccons1.push(new DanhMucCon('Vsmart Star', 'vsst', 'item'));
    danhmuccons1.push(new DanhMucCon('Vivo Y15', 'vvy15', 'item'));
    danhmuccons1.push(new DanhMucCon('Vivo Y12', 'vvy12', 'item'));
    danhmuccons1.push(new DanhMucCon('Smartphone Chính Hãng', 'smartreal', 'title'));
    danhmuccons1.push(new DanhMucCon('Xiaomi Redmi 8', 'xmnm8', 'item'));
    danhmuccons1.push(new DanhMucCon('Samsung', 'ss', 'item'));
    danhmuccons1.push(new DanhMucCon('Apple', 'apple', 'item'));
    danhmuccons1.push(new DanhMucCon('Oppo', 'opple', 'item'));
    danhmuccons1.push(new DanhMucCon('VSmart', 'vsmart', 'item'));
    danhmuccons1.push(new DanhMucCon('Vivo', 'vivo', 'item'));
    danhmuccons1.push(new DanhMucCon('Xiaomi', 'xiaomi', 'item'));
    danhmuccons1.push(new DanhMucCon('Nokia', 'nokia', 'item'));
    danhmuccons1.push(new DanhMucCon('Realme', 'realme', 'item'));
    danhmuccons1.push(new DanhMucCon('Blackberry', 'blackberry', 'item'));
    danhmuccons1.push(new DanhMucCon('Bphone', 'bphone', 'item'));
    danhmuccons1.push(new DanhMucCon('Máy tính bảng', 'mtb', 'title'));
    danhmuccons1.push(new DanhMucCon('Phụ kiện điện thoại', 'phukiendocsach', 'title'));
    danhmuccons1.push(new DanhMucCon('Máy đọc sách', 'maydocsach', 'title'));
    danhmuccons1.push(new DanhMucCon('Dịch vụ, Chính sách', 'dichvuchinhsach', 'title'));
    danhmuccons1.push(new DanhMucCon('Trung tâm bảo hành chính hãng', 'trungtambaohanh', 'title'));
    danhmuccons1.push(new DanhMucCon('Hướng dẫn mua trả góp', 'huongdanmuatragop', 'item'));
    danhmuccons1.push(new DanhMucCon('Quy trình đóng gói, giao hàng', 'quytrinhdonggoiogiaohang', 'title'));
    danhmuccons1.push(new DanhMucCon('Quy trình đổi trả và bảo hành', 'quytrinhdoitrabaohanh', 'title'));

    danhmuccons2.push(new DanhMucCon('Tivi', '', 'title'));
    danhmuccons2.push(new DanhMucCon('Tivi bán chạy', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Tivi mới 2019', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Tivi cao cấp', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Smart Tivi - Android Tivi', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Internet Tivi', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Tivi 4K', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Tivi LED thường', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Tivi QLED', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Tivi QLED', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Âm thanh & Phụ kiện', '', 'title'));
    danhmuccons2.push(new DanhMucCon('Loa nghe nhạc', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Loa Karaoke', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Dàn âm thanh', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Android TV Box', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Amply', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Micro', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Đầu CD, DVD, Karaoke', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Máy radio cassette', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Phụ kiện Tivi', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Phụ kiện Âm thanh', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Máy Lạnh- Máy Điều Hòa', '', 'title'));
    danhmuccons2.push(new DanhMucCon('Máy lạnh bán chạy', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Máy lạnh mới 2019', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Máy lạnh Inverter', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Máy Giặt', '', 'title'));
    danhmuccons2.push(new DanhMucCon('Máy giặt bán chạy', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Máy giặt mới 2019', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Máy giặt Inverter', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Máy Sấy Quần Áo', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Tủ Lạnh', '', 'title'));
    danhmuccons2.push(new DanhMucCon('Tủ lạnh bán chạy', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Tủ lạnh mới 2019', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Tủ lạnh Side by side', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Tủ lạnh Inverter', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Tủ Đông - Tủ Mát', '', 'title'));
    danhmuccons2.push(new DanhMucCon('Máy Nước Nóng', '', 'title'));
    danhmuccons2.push(new DanhMucCon('Máy Rửa Chén', '', 'title'));
    danhmuccons2.push(new DanhMucCon('Tủ Ướp Rượu', '', 'title'));
    danhmuccons2.push(new DanhMucCon('Dịch Vụ và Bảo Hành', '', 'title'));
    danhmuccons2.push(new DanhMucCon('Bảo hành - Đổi trả', '', 'item'));
    danhmuccons2.push(new DanhMucCon('TikiNow- Giao Trong Ngày', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Lắp Đặt Tận Nhà', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Mua Trả góp 0%', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Chính Hãng Thương Hiệu', '', 'title'));
    danhmuccons2.push(new DanhMucCon('LG', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Sony', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Panasonic', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Samsung', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Electrolux', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Hitachi', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Aqua', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Sharp', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Daikin', '', 'item'));
    danhmuccons2.push(new DanhMucCon('JBL', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Phillips', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Mitsubishi', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Ariston', '', 'item'));
    danhmuccons2.push(new DanhMucCon('TCL', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Sanaky', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Beko', '', 'item'));
    danhmuccons2.push(new DanhMucCon('Ferroli', '', 'item'));

    danhmuccons3.push(new DanhMucCon('Thiết Bị Âm Thanh', '', 'title'));
    danhmuccons3.push(new DanhMucCon('Tât Cả Tai nghe', '', 'title'));
    danhmuccons3.push(new DanhMucCon('Tai nghe nhét tai', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Tai nghe chụp tai', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Tai nghe Bluetooth đàm thoại', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Tai nghe nhạc Bluetooth', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Tai nghe Bluetooth Thể Thao', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Tât Cả Loa', '', 'title'));
    danhmuccons3.push(new DanhMucCon('Loa Vi Tính', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Loa Bluetooth', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Loa Kéo', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Soundbar/loa hifi/khác', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Máy nghe nhạc - Máy Ghi Âm', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Phụ Kiện Âm Thanh', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Thiết Bị Đeo Thông Minh', '', 'title'));
    danhmuccons3.push(new DanhMucCon('Đồng Hồ Thông Minh', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Kính Thực Tế Ảo', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Thiết bị nhà thông minh', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Phụ Kiện Điện Thoại', '', 'title'));
    danhmuccons3.push(new DanhMucCon('Pin Sạc Dự Phòng', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Dây Cáp Sạc', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Cáp sạc iPhone/iPad', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Đế Sạc Không Dây', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Adapter - Củ sạc', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Thẻ nhớ điện thoại', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Bao da - Ốp lưng', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Miếng dán màn hình', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Gậy chụp hình - Gậy Selfie', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Sim Số, 3G/4G', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Thiết Bị Game', '', 'title'));
    danhmuccons3.push(new DanhMucCon('Chuột Gaming', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Bàn phím Gaming', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Tai nghe Gaming', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Lót chuột game - Mousepad', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Màn hình Gaming', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Ghế Gaming', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Tay bấm game - Thiết Bị điều khiển', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Máy chơi game - Console', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Đĩa Game', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Phụ kiện Game', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Thiết Bị Mạng', '', 'title'));
    danhmuccons3.push(new DanhMucCon('Bộ phát Wifi', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Thiết Bị 3G/4G', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Router Wifi', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Thiết Bị Mở Rộng Sóng', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Access Point', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Bộ chia mạng - Switch', '', 'item'));
    danhmuccons3.push(new DanhMucCon('USB wifi', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Ổ cứng mạng', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Phụ kiện thiết bị mạng', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Thương hiệu nổi bật', '', 'title'));
    danhmuccons3.push(new DanhMucCon('Sennheiser', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Audio-technica', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Energizer', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Microlab', '', 'item'));
    danhmuccons3.push(new DanhMucCon('SoundMax', '', 'item'));
    danhmuccons3.push(new DanhMucCon('TP-Link', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Sony', '', 'item'));
    danhmuccons3.push(new DanhMucCon('WD', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Seagate', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Dell', '', 'item'));
    danhmuccons3.push(new DanhMucCon('Totolink', '', 'item'));


    danhmuccons4.push(new DanhMucCon('Dịch Vụ và Bảo Hành', '', 'title'));
    danhmuccons4.push(new DanhMucCon('TikiNow - Giao Nhanh tận nhà', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Trả góp 0%', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Chính Hãng 100%', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Bảo hành tận nhà', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Đổi trả tận nhà', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Laptop Theo Giá', '', 'title'));
    danhmuccons4.push(new DanhMucCon('Dưới 8 triệu', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Từ 8 - 10 triệu', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Từ 10 - 15 triệu', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Từ 15 - 20 triệu', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Trên 20 triệu', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Laptop Theo Core', '', 'title'));
    danhmuccons4.push(new DanhMucCon('Intel Core i3', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Intel Core i5', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Intel Core i7', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Laptop Chính Hãng', '', 'title'));
    danhmuccons4.push(new DanhMucCon('Macbook', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Dell', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Asus', '', 'item'));
    danhmuccons4.push(new DanhMucCon('HP', '', 'item'));
    danhmuccons4.push(new DanhMucCon('LG', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Lenovo', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Acer', '', 'item'));
    danhmuccons4.push(new DanhMucCon('MSI', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Masstel', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Laptop Gaming', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Máy tính để bàn', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Thiết Bị Văn Phòng', '', 'title'));
    danhmuccons4.push(new DanhMucCon('Màn hình máy tính', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Máy in - Máy Scan', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Máy Chiếu', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Mực in', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Giấy in', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Phần mềm máy tính', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Máy hủy tài liệu', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Máy chấm công', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Máy và thiết bị văn phòng khác', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Phụ kiện, Linh kiện máy tính', '', 'title'));
    danhmuccons4.push(new DanhMucCon('Chuột máy tính', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Bàn Phím', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Combo Bàn Phím & Chuột', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Ổ cứng di động', '', 'item'));
    danhmuccons4.push(new DanhMucCon('USB', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Đế tản nhiệt Laptop', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Ổ cứng HDD', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Ổ cứng SSD', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Bo mạch chủ - Mainboard', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Card Màn Hình - VGA', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Case - Nguồn Máy Tính - Tản Nhiệt', '', 'item'));
    danhmuccons4.push(new DanhMucCon('CPU - Bộ Vi Xử Lý', '', 'item'));
    danhmuccons4.push(new DanhMucCon('UPS - Bộ Lưu Điện', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Sound Card - Card Âm Thanh', '', 'item'));
    danhmuccons4.push(new DanhMucCon('HUB USB', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Thiết Bị Khác (adapter laptop ...)', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Bảng Vẽ - Bút Vẽ', '', 'item'));
    danhmuccons4.push(new DanhMucCon('Ram máy tính', '', 'item'));


    danhmuccons5.push(new DanhMucCon('Top Bán Chạy Trong Tháng', '', 'title'));
    danhmuccons5.push(new DanhMucCon('Top Máy Ảnh DSLR Bán Chạy', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Top Máy Ảnh Mirrorless Bán Chạy', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Top Ống Kính (Lens) Bán Chạy', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Top Phụ Kiện Máy Ảnh Bán Chạy', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Sản Phẩm Nổi Bật', '', 'title'));
    danhmuccons5.push(new DanhMucCon('Máy Ảnh Canon 750D + Lens 18-55 IS STM', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Máy Ảnh Canon M10 KIT 15-45mm', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Máy Ảnh Sony Alpha A6000 + 16-50mm', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Máy Ảnh Fujifilm X-T20 (24.3MP) + Lens 18-55mm', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Máy Ảnh Canon EOS M50 + Kit 15-45mm', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Lens Canon 50mm f/1.8 STM', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Máy Ảnh- Máy Quay Phim', '', 'title'));
    danhmuccons5.push(new DanhMucCon('Máy Ảnh Mirrorless', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Máy Ảnh DSLR', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Máy Ảnh Du Lịch', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Máy Ảnh Chụp Lấy Liền', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Máy Quay Phim Sony', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Máy Quay Phim Canon', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Ống Kính- Lens', '', 'title'));
    danhmuccons5.push(new DanhMucCon('Lens Canon', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Lens Sony', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Lens Fujifilm', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Lens Nikon', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Lens Sigma', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Lens Tamron', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Phụ Kiện Theo Máy Ảnh', '', 'title'));
    danhmuccons5.push(new DanhMucCon('Thẻ Nhớ Máy Ảnh', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Chân Máy Ảnh Tripods & Monopods', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Adapter - Ngàm Chuyển', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Dây Đeo Máy Ảnh, Máy Quay', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Pin Và Sạc Pin', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Đèn Flash Và Phụ Kiện', '', 'title'));
    danhmuccons5.push(new DanhMucCon('Gimbal-Thiết Bị Chống Rung', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Lens Hood', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Kính Lọc- Filter', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Dụng Cụ Vệ Sinh Máy Ảnh', '', 'title'));
    danhmuccons5.push(new DanhMucCon('Phụ Kiện Máy Ảnh - Máy Quay Khác', '', 'title'));
    danhmuccons5.push(new DanhMucCon('Balo-Túi Máy Ảnh    ', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Ống Nhòm', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Hộp Đựng, Tủ Chống Ẩm', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Camera Giám Sát', '', 'title'));
    danhmuccons5.push(new DanhMucCon('Action Camera', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Máy Bay Camera - Drone', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Camera Hành Trình Ô Tô', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Camera Quan Sát', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Webcam', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Thương Hiệu', '', 'title'));
    danhmuccons5.push(new DanhMucCon('Canon', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Fujifilm', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Nikon', '', 'item'));
    danhmuccons5.push(new DanhMucCon('GoPro', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Sigma', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Tamron', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Benro', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Wasabi', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Godox', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Chương Trình Và Chính Sách Ưu Đãi', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Chính Hãng Mới 100%', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Trung Tâm Bảo Hành Chính Hãng', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Hướng Dẫn Mua Trả Góp 0%', '', 'item'));
    danhmuccons5.push(new DanhMucCon('Quy Trình Đổi- Trả Và Bảo Hành', '', 'item'));



    danhmuccons6.push(new DanhMucCon('Khuyến mãi HOT', '', 'title'));
    danhmuccons6.push(new DanhMucCon('Bán chạy', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Giảm giá', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Điện gia dụng trả góp 0%', '', 'item'));
    danhmuccons6.push(new DanhMucCon('HOT TREND', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Top Thương hiệu', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Philips', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Lock&Lock', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Bluestone', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Kangaroo', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Sunhouse', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Sharp', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Panasonic', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Electrolux', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Toshiba', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Delonghi', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Comet', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Nagakawa', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Thương hiệu mới', '', 'title'));
    danhmuccons6.push(new DanhMucCon('Hafele', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Ariete', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Teka', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Hurom', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Đồ dùng nhà bếp', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Top bán chạy', '', 'title'));
    danhmuccons6.push(new DanhMucCon('Nồi chiên', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Nồi cơm điện', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Máy xay-máy ép', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Lò vi sóng', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Lò nướng điện', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Vỉ nướng điện', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Bếp các loại', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Máy pha cà phê', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Máy làm sữa đậu nành', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Máy làm tỏi đen', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Bình đun siêu tốc', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Nồi áp suất', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Máy hút khói, khử mùi', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Máy đánh trứng', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Máy sấy thực phẩm', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Bình thủy điện', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Siêu sắc thuốc', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Máy hút chân không', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Máy sấy chén', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Thiết bị gia đình', '', 'title'));
    danhmuccons6.push(new DanhMucCon('Top bán chạy', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Bàn ủi - Bàn là', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Quạt điện', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Thiết bị sưởi ấm', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Máy hút bụi', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Robot hút bụi', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Máy lọc không khí', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Máy tạo ẩm', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Máy hút ẩm', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Máy lọc nước', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Cây nước nóng lạnh', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Máy may-máy thêu', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Máy sấy quần áo', '', 'item'));
    danhmuccons6.push(new DanhMucCon('Máy sấy tay', '', 'item'));


    danhmuccons7.push(new DanhMucCon('Nổi bật', '', 'title'));
    danhmuccons7.push(new DanhMucCon('Bán chạy', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Hàng mới', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Giảm giá', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Khuyến mãi nổi bật trong tháng', '', 'title'));
    danhmuccons7.push(new DanhMucCon('Cẩm nang khuyến mãi', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Đồ dùng nhà bếp và phòng ăn giá sốc', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Chăn drap và nội thất giá sốc', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Đồ dùng nhà tắm và sửa chữa giá sốc', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Dụng cụ làm bánh', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Thương hiệu hàng đầu', '', 'title'));
    danhmuccons7.push(new DanhMucCon('Lock&Lock', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Duy Tân', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Everon', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Luminarc', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Minh Long', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Homeeasy', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Sunhouse', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Zojirushi', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Karcher', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Bosch', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Philips', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Đồ dùng gia đình', '', 'title'));
    danhmuccons7.push(new DanhMucCon('Dụng cụ nấu ăn', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Cà men, hộp đựng cơm', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Hộp đựng thực phẩm', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Kệ nhà bếp', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Dao và phụ kiện', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Bình nước, bình giữ nhiệt', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Bộ bình ly', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Bộ bình trà', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Bình lọc nước', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Ly, cốc', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Tô chén đĩa', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Đồ dùng phòng ngủ', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Ga giường, drap', '', 'title'));
    danhmuccons7.push(new DanhMucCon('Nệm', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Nội thất', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Tủ quần áo', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Đèn & thiết bị chiếu sáng', '', 'title'));
    danhmuccons7.push(new DanhMucCon('Đèn bàn', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Bóng đèn', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Ổ cắm điện', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Dụng cụ vệ sinh', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Thiết bị phòng tắm', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Giàn phơi', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Đồ dùng và thiết bị nhà tắm', '', 'title'));
    danhmuccons7.push(new DanhMucCon('Bộ lau nhà', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Phụ kiện giặt ủi', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Bảo vệ nhà cửa', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Thiết bị điều khiển thông minh', '', 'title'));
    danhmuccons7.push(new DanhMucCon('Vật phẩm phong thủy', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Đồ thờ cúng', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Ổn áp, biến áp', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Sửa chữa nhà cửa', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Máy khoan', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Máy xịt rửa', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Thang nhôm', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Xe đẩy', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Dụng cụ diệt chuột, côn trùng', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Pin và dụng cụ sạc pin', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Trang trí nhà cửa', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Nhạc cụ', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Ngoài trời & sân vườn', '', 'item'));
    danhmuccons7.push(new DanhMucCon('Hoa tươi và cây cảnh', '', 'item'));

    danhmuccons8.push(new DanhMucCon('THỰC PHẨM', '', 'title'));
    danhmuccons8.push(new DanhMucCon('Dầu ăn', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Đồ hộp', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Gia vị', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Thực phẩm ăn liền', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Thực phẩm chay', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Nấu ăn & Làm bánh', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Thực phẩm chế biến', '', 'item'));
    danhmuccons8.push(new DanhMucCon('BÁNH KẸO', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Bánh', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Kẹo', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Socola', '', 'item'));
    danhmuccons8.push(new DanhMucCon('ĐỒ UỐNG - GIẢI KHÁT', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Bia', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Đồ uống có gas', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Đồ uống không gas', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Đồ uống có cồn', '', 'item'));
    danhmuccons8.push(new DanhMucCon('ĐỒ UỐNG - PHA CHẾ', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Trà', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Cà phê', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Ngũ cốc - Bột', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Sữa nước', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Sữa bột', '', 'item'));
    danhmuccons8.push(new DanhMucCon('THỰC PHẨM KHÁC', '', 'title'));
    danhmuccons8.push(new DanhMucCon('Thực phẩm bổ dưỡng', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Thực phẩm hữu cơ', '', 'item'));
    danhmuccons8.push(new DanhMucCon('CHĂM SÓC THÚ CƯNG', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Chăm sóc chó', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Chăm sóc mèo', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Chăm sóc cá', '', 'item'));
    danhmuccons8.push(new DanhMucCon('CÓ GÌ HOT TRONG THÁNG', '', 'title'));
    danhmuccons8.push(new DanhMucCon('Bách Hóa Online - Mua Sắm Liền Tay', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Flash sale dành cho BOSS , giá cực HOT', '', 'item'));
    danhmuccons8.push(new DanhMucCon('TOP THƯƠNG HIỆU', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Acecook', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Ân Nam Finefood', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Budweiser', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Chupa Chups', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Coca - Cola', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Dutch Lady - Yomost', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Heineken', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Kinh Đô Mondelez', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Knorr', '', 'item'));
    danhmuccons8.push(new DanhMucCon("L'angfarm", '', 'item'));
    danhmuccons8.push(new DanhMucCon('Mars', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Me-O', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Milo', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Neptune', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Nescafe', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Omachi', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Orion', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Pepsi', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Quaker', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Smart Heart', '', 'item'));
    danhmuccons8.push(new DanhMucCon('TH true Milk', '', 'item'));
    danhmuccons8.push(new DanhMucCon('Việt Ngũ cốc', '', 'item'));

    danhmuccons9.push(new DanhMucCon('Khuyến mãi HOT', '', 'title'));
    danhmuccons9.push(new DanhMucCon('Bán chạy', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Hàng mới', '', 'item'));
    danhmuccons9.push(new DanhMucCon('TÃ - BỈM', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Tã dán', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Tã quần', '', 'item'));
    danhmuccons9.push(new DanhMucCon('SỮA- THỰC PHẨM ĂN DẶM', '', 'title'));
    danhmuccons9.push(new DanhMucCon('Thực phẩm ăn dặm cho bé', '', 'title'));
    danhmuccons9.push(new DanhMucCon('Sữa cho bé dưới 24 tháng tuổi', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Sữa cho bé trên 24 tháng tuổi', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Sữa cho bà mẹ mang thai và sau sinh', '', 'item'));
    danhmuccons9.push(new DanhMucCon('CHƯƠNG TRÌNH KHUYẾN MÃI TRONG THÁNG', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Mẹ săn khuyến mãi', '', 'title'));
    danhmuccons9.push(new DanhMucCon('Siêu thị tã bỉm', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Bí kíp chăm sóc nhà sạch của mẹ', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Đồ chơi & Thời trang cho bé', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Hành trình làm mẹ', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Thế giới ăn dặm cho bé', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Bí kíp chăm sóc mẹ và bé yêu', '', 'item'));
    danhmuccons9.push(new DanhMucCon('ĐỒ CHƠI', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Lắp ghép, xếp hình', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Đồ chơi giáo dục', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Đồ chơi gỗ', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Đồ chơi mô hình', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Búp bê, Thú bông', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Đồ chơi vận động', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Đồ chơi sơ sinh', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Boardgame', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Lều, thảm chơi cho bé', '', 'item'));
    danhmuccons9.push(new DanhMucCon('THỜI TRANG-PHỤ KIỆN CHO BÉ', '', 'title'));
    danhmuccons9.push(new DanhMucCon('Thời trang sơ sinh', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Thời trang bé gái', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Giày dép bé gái', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Thời trang bé trai', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Giày dép bé trai', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Phụ kiện cho bé', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Vali, balo, túi xách', '', 'item'));
    danhmuccons9.push(new DanhMucCon('ĐỒ DÙNG CHO MẸ', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Máy hút sữa, Túi trữ sữa', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Phụ kiện cho mẹ', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Thời trang bầu', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Phương pháp dân gian', '', 'item'));
    danhmuccons9.push(new DanhMucCon('ĐỒ DÙNG CHO BÉ', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Bình sữa, bình tập uống', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Dụng cụ tập ăn', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Ghế ăn', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Thau bô, chậu tắm', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Khăn tắm, áo choàng', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Khăn giấy ướt', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Nôi, giường cũi, võng', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Xe đẩy', '', 'item'));
    danhmuccons9.push(new DanhMucCon('GIẶT XẢ & TẮM GỘI CHO BÉ', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Giặt xả quần áo cho bé', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Nước rửa bình', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Sữa tắm, dầu gội cho bé', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Phấn, kem dưỡng da, nước hoa cho bé', '', 'item'));
    danhmuccons9.push(new DanhMucCon('GIẶT GIŨ & VỆ SINH NHÀ CỬA', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Giặt giũ & chăm sóc quần áo', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Vệ sinh nhà cửa', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Diệt côn trùng', '', 'item'));
    danhmuccons9.push(new DanhMucCon('Khăn giấy', '', 'item'));

    danhmuccons10.push(new DanhMucCon('ƯU ĐÃI HOT 49%', '', 'title'));
    danhmuccons10.push(new DanhMucCon('Best Seller - Hot không ngờ', '', 'title'));
    danhmuccons10.push(new DanhMucCon('New Arrival - Giá dùng thử cực sốc', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Brand Day - Thương hiệu chính hãng ** ƯU ĐÃI MỖI NGÀY', '', 'item'));
    danhmuccons10.push(new DanhMucCon('ƯU ĐÃI TRONG THÁNG', '', 'title'));
    danhmuccons10.push(new DanhMucCon('Hết mụn - Quên lo âu', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Make up lung linh 3in1', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Tóc đẹp tung tăng', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Hương thơm gợi ánh nhìn', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Sạch thơm toàn diện', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Sức khỏe vàng', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Trang điểm', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Trang điểm mặt', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Trang điểm mắt', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Trang điểm môi', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Dụng cụ trang điểm', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Thiết bị chăm sóc sức khỏe', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Dụng cụ theo dõi sức khỏe', '', 'title'));
    danhmuccons10.push(new DanhMucCon('Máy massage', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Thiết bị y tế', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Thực phẩm chức năng', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Chăm sóc da mặt', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Sữa rửa mặt', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Nước hoa hồng', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Serum & kem dưỡng', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Dưỡng ẩm', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Dưỡng trắng', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Mặt nạ', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Chống nắng', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Chăm sóc cơ thể', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Sữa tắm', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Dưỡng thể', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Khử mùi', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Chăm sóc tóc', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Dầu gội - Dầu xả', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Dưỡng tóc - Ủ tóc', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Chăm sóc cá nhân', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Chăm sóc răng miệng', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Dược mỹ phẩm', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Sản phẩm thiên thiên', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Hỗ trợ tình dục', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Thiết bị làm đẹp', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Bộ sản phẩm làm đẹp', '', 'title'));
    danhmuccons10.push(new DanhMucCon('Nước hoa', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Tinh dầu spa', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Thương hiệu', '', 'item'));
    danhmuccons10.push(new DanhMucCon('La Roche-Posay', '', 'item'));
    danhmuccons10.push(new DanhMucCon("L'oreal Paris", '', 'item'));
    danhmuccons10.push(new DanhMucCon('Maybelline', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Vichy', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Laneige', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Innsifree', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Rohto', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Anessa - Senka - ZA - Tsubaki', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Nivea', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Ofélia', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Durex', '', 'item'));
    danhmuccons10.push(new DanhMucCon('SHISEIDO', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Mamonde', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Omron', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Milaganics', '', 'item'));
    danhmuccons10.push(new DanhMucCon('DHC', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Yves Rocher', '', 'item'));
    danhmuccons10.push(new DanhMucCon('P&G', '', 'item'));
    danhmuccons10.push(new DanhMucCon('BBIA', '', 'item'));
    danhmuccons10.push(new DanhMucCon('Vedette', '', 'item'));
    danhmuccons10.push(new DanhMucCon('The Body Shop', '', 'item'));
    danhmuccons10.push(new DanhMucCon("Paula's Choice", '', 'item'));
    danhmuccons10.push(new DanhMucCon('Romano - Enchanteur - Bioessence', '', 'item'));

    danhmuccons11.push(new DanhMucCon('TOP sản phẩm bán chạy nhất', '', 'title'));
    danhmuccons11.push(new DanhMucCon('Khuyến mãi HOT thời trang phụ kiện', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Brand Day – Hàng hiệu giảm đến 50%', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Xu hướng thời trang xuân 2020', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Thời trang nữ', '', 'title'));
    danhmuccons11.push(new DanhMucCon('Áo nữ', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Áo cardigan, áo len, áo hoodie nữ', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Áo khoác nữ', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Đầm nữ', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Quần nữ', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Chân váy', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Váy chống nắng, khẩu trang', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Đồ ngủ, đồ mặc nhà, đồ lót, đồ bơi', '', 'title'));
    danhmuccons11.push(new DanhMucCon('Tất, vớ nữ', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Nón nữ', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Phụ kiện tóc nữ', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Phụ kiện nữ khác', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Phụ kiện thời trang', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Đồng hồ', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Mắt kính', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Trang sức', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Thời trang nam', '', 'title'));
    danhmuccons11.push(new DanhMucCon('Áo thun nam', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Áo sơmi nam', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Áo khoác nam', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Quần nam', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Đồ lót, đồ ngủ, đồ bơi nam', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Tất, vớ nam', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Thắt lưng, dây nịt nam', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Nón nam', '', 'title'));
    danhmuccons11.push(new DanhMucCon('Phụ kiện nam khác', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Giày dép nữ', '', 'title'));
    danhmuccons11.push(new DanhMucCon('Giày sneakers nữ', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Giày sandals nữ', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Giày cao gót', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Giày búp bê', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Phụ kiện giày', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Giày dép nam', '', 'title'));
    danhmuccons11.push(new DanhMucCon('Giày sneaker nam', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Giày mọi, lười, oxford nam', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Giày sandals nam', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Dép nam', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Phụ kiện giày nam', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Balo, túi xách, ví thời trang', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Balo', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Balo mini', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Túi thời trang nữ', '', 'title'));
    danhmuccons11.push(new DanhMucCon('Ví nữ', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Túi xách, ví nam', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Ví nam', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Cặp, túi nam', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Balo, túi xách, cặp laptop', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Balo laptop', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Cặp đựng laptop', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Túi chống sốc', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Vali, balo, túi du lịch', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Vali', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Balo du lịch, phượt', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Túi trống, túi du lịch', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Phụ kiện du lịch', '', 'title'));
    danhmuccons11.push(new DanhMucCon('Phụ kiện vali', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Túi phụ kiện', '', 'item'));
    danhmuccons11.push(new DanhMucCon('Phụ kiện du lịch khác', '', 'item'));


    danhmuccons12.push(new DanhMucCon('HOT', '', 'title'));
    danhmuccons12.push(new DanhMucCon('Săn hàng thể thao - Giảm đến 50%', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Hoạt động ngoài trời - Giá chỉ từ 99k', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Thương hiệu giày thể thao mới', '', 'item'));
    danhmuccons12.push(new DanhMucCon('THƯƠNG HIỆU NỔI BẬT', '', 'title'));
    danhmuccons12.push(new DanhMucCon('Anta', '', 'item'));
    danhmuccons12.push(new DanhMucCon("Biti's Hunter", '', 'item'));
    danhmuccons12.push(new DanhMucCon('Boxing Saigon', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Coleman', '', 'item'));
    danhmuccons12.push(new DanhMucCon('MDbuddy', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Mizuno', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Mofit', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Naturehike', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Nike', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Reebok', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Salomon', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Sportslink', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Victorinox', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Yonex', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Zippo', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Li-Ning', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Asics', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Adidas', '', 'item'));
    danhmuccons12.push(new DanhMucCon('THỜI TRANG THỂ THAO', '', 'title'));
    danhmuccons12.push(new DanhMucCon('Giày thể thao nam', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Giày thể thao nữ', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Trang phục thể thao nam', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Trang phục thể thao nữ', '', 'item'));
    danhmuccons12.push(new DanhMucCon('GYM - YOGA & FITNESS', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Máy chạy bộ', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Xe đạp tập', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Giàn tạ - tạ tập', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Xà đơn - xà kép', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Thảm yoga, bóng tập', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Đấm bốc & võ thuật', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Dụng cụ tập bụng', '', 'item'));
    danhmuccons12.push(new DanhMucCon('THỰC PHẨM BỔ SUNG NĂNG LƯỢNG', '', 'title'));
    danhmuccons12.push(new DanhMucCon('Thực phẩm tăng cân', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Thực phẩm tăng cơ', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Thực phẩm tăng sức bền', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Thực phẩm giảm cân', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Bổ sung năng lượng', '', 'item'));
    danhmuccons12.push(new DanhMucCon('HOẠT ĐỘNG DÃ NGOẠI', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Lều - túi ngủ', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Bàn ghế xếp di động', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Câu cá', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Trượt patin', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Phụ kiện dã ngoại', '', 'item'));
    danhmuccons12.push(new DanhMucCon('CÁC BỘ MÔN THỂ THAO', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Bơi lội', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Bóng đá', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Bóng rổ', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Bóng bàn', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Cầu lông', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Tennis', '', 'item'));
    danhmuccons12.push(new DanhMucCon('PHỤ KIỆN THỂ THAO', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Túi thể thao', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Băng cổ tay, băng trán thể thao', '', 'item'));
    danhmuccons12.push(new DanhMucCon('Bình nước thể thao', '', 'item'));

    danhmuccons13.push(new DanhMucCon('Mô tô - Xe máy', '', 'title'));
    danhmuccons13.push(new DanhMucCon('Xe đạp - Xe điện trả góp 0% lãi suất', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Chuyên trang xe và phụ kiện', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Xe tay ga', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Xe số', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Xe côn tay', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Xe Mô tô', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Xe 50cc', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Phụ kiện xe máy', '', 'title'));
    danhmuccons13.push(new DanhMucCon('Dầu nhớt, phụ gia', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Ô Tô', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Hyundai', '', 'item'));
    danhmuccons13.push(new DanhMucCon('FORD', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Honda', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Toyota', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Thương hiệu mới (Hot)', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Homesheel', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Ekokemika', '', 'item'));
    danhmuccons13.push(new DanhMucCon('AGU', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Focar', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Voltronic', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Karshine', '', 'item'));
    danhmuccons13.push(new DanhMucCon('AGV Helmet', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Xe điện', '', 'title'));
    danhmuccons13.push(new DanhMucCon('Xe máy điện', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Xe đạp điện', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Xe điện thăng bằng', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Xe đạp', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Xe đạp thể thao', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Xe đạp thông dụng', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Xe đạp Fixed gear', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Xe đạp trẻ em', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Xe Scooter', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Phụ kiện , đồ nghề xe đạp', '', 'title'));
    danhmuccons13.push(new DanhMucCon('Mũ bảo hiểm', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Mũ bảo hiểm xe máy', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Mũ bảo hiểm xe đạp', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Máy rửa xe', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Phụ kiện ô tô', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Gối, đệm, ghế', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Nước hoa, sáp thơm', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Chắn nắng, bạt phủ xe', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Thảm sàn, để chân', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Sản phẩm chăm sóc xe', '', 'title'));
    danhmuccons13.push(new DanhMucCon('Phụ tùng ô tô', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Thương hiệu', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Honda', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Yamaha', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Vespa/Piaggio', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Vinfast', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Royal Enfield', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Triumph Motorcycle', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Asia Helmet', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Royal Helmet', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Liqui moly', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Andes', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Motul', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Chita', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Soft99', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Giant', '', 'item'));
    danhmuccons13.push(new DanhMucCon('3M', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Michelin', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Pega', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Sonax', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Bullsone', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Philips', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Bosch', '', 'item'));
    danhmuccons13.push(new DanhMucCon('Fornix', '', 'item'));
    danhmuccons13.push(new DanhMucCon('YSS', '', 'item'));

    danhmuccons14.push(new DanhMucCon('HOT', '', 'title'));
    danhmuccons14.push(new DanhMucCon('Săn deal từ 99k', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Sản phẩm bán chạy', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Thương Hiệu Luxury', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Ngày hội thương hiệu', '', 'title'));
    danhmuccons14.push(new DanhMucCon('XUẤT XỨ', '', 'title'));
    danhmuccons14.push(new DanhMucCon('Joybuy', '', 'item'));
    danhmuccons14.push(new DanhMucCon('China', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Taiwan', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Korea', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Singapore', '', 'item'));
    danhmuccons14.push(new DanhMucCon('US', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Úc', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Nhật', '', 'item'));
    danhmuccons14.push(new DanhMucCon('THƯƠNG HIỆU', '', 'title'));
    danhmuccons14.push(new DanhMucCon('Laneige', '', 'item'));
    danhmuccons14.push(new DanhMucCon('FILA', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Lock&Lock', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Oral-B', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Xiaomi', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Huawei', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Naruko', '', 'item'));
    danhmuccons14.push(new DanhMucCon('My Beauty Diary', '', 'item'));
    danhmuccons14.push(new DanhMucCon('THIẾT BỊ SỐ - PHỤ KIỆN SỐ', '', 'title'));
    danhmuccons14.push(new DanhMucCon('Tai nghe', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Loa nghe nhạc', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Thiết bị thông minh', '', 'item'));
    danhmuccons14.push(new DanhMucCon('NHÀ CỬA - ĐỜI SỐNG', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Phòng ăn & nhà bếp', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Phòng tắm', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Trang trí nhà cửa', '', 'item'));
    danhmuccons14.push(new DanhMucCon('LÀM ĐẸP - SỨC KHOẺ', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Chăm sóc da mặt', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Trang điểm', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Thiết bị làm đẹp', '', 'item'));
    danhmuccons14.push(new DanhMucCon('ĐIỆN GIA DỤNG', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Thiết bị nhà bếp', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Thiết bị gia đình', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Phụ kiện điện gia dụng', '', 'item'));
    danhmuccons14.push(new DanhMucCon('ĐIỆN THOẠI - MÁY TÍNH BẢNG', '', 'title'));
    danhmuccons14.push(new DanhMucCon('Điện thoại thông minh', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Máy tính bảng', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Điện thoại phổ thông', '', 'item'));
    danhmuccons14.push(new DanhMucCon('SÁCH NGOẠI VĂN - VĂN PHÒNG PHẨM', '', 'item'));
    danhmuccons14.push(new DanhMucCon("Children's Books", '', 'item'));
    danhmuccons14.push(new DanhMucCon('Business & Economics', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Văn phòng phẩm', '', 'item'));
    danhmuccons14.push(new DanhMucCon('MẸ BÉ', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Đồ chơi', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Đồ dùng cho bé', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Chăm sóc mẹ bầu', '', 'item'));
    danhmuccons14.push(new DanhMucCon('LAPTOP - MÁY VI TÍNH', '', 'title'));
    danhmuccons14.push(new DanhMucCon('Linh kiện máy tính', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Laptop', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Máy in - máy scan', '', 'item'));
    danhmuccons14.push(new DanhMucCon('MÁY ẢNH - MÁY QUAY PHIM', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Phụ kiện máy ảnh', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Máy ảnh', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Ống kính', '', 'item'));
    danhmuccons14.push(new DanhMucCon('THỜI TRANG', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Thời trang nữ', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Thời trang nam', '', 'item'));
    danhmuccons14.push(new DanhMucCon('Túi và phụ kiện', '', 'item'));


    danhmuccons15.push(new DanhMucCon('KHUYẾN MÃI HOT', '', 'title'));
    danhmuccons15.push(new DanhMucCon('8888 Deals giảm đến 80%', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Back to school 2020', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Fahasa - Tưng bừng sinh nhật', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Nhã Nam - Giảm đến 50%', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Đinh Tị - Đồng giảm 35%', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Saigonbooks - Giảm Đến 50%', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Đông A - Giảm đến 50%', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Sách ngoại văn đồng giảm 70%', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Sách ngoại văn trẻ em - Giảm đến 80%', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Họa cụ online - Giảm đến 50%', '', 'item'));
    danhmuccons15.push(new DanhMucCon('TIKI KHUYÊN ĐỌC', '', 'title'));
    danhmuccons15.push(new DanhMucCon('Cẩm nang sống khỏe mùa dịch', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Sách hay Tiki khuyên đọc', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Sách Nuôi Dạy Con', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Tủ Sách Doanh Nhân', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Sách Tương Tác Cho Bé', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Harvard Business Review', '', 'item'));
    danhmuccons15.push(new DanhMucCon('I-Learn Smart Maths', '', 'item'));
    danhmuccons15.push(new DanhMucCon('SÁCH TIẾNG VIỆT', '', 'title'));
    danhmuccons15.push(new DanhMucCon('Sách Bán Chạy', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Sách Mới Phát Hành', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Sách Văn Học', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Sách Kinh Tế - Kỹ Năng', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Sách Thiếu Nhi', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Sách Luyện Thi', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Sách Học Ngoại Ngữ', '', 'item'));
    danhmuccons15.push(new DanhMucCon('SÁCH NGOẠI VĂN', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Daily Hot Deal', '', 'item'));
    danhmuccons15.push(new DanhMucCon('New Arrival', '', 'item'));
    danhmuccons15.push(new DanhMucCon("Children's Books", '', 'item'));
    danhmuccons15.push(new DanhMucCon('Dictionary', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Fiction', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Social Sciences', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Must Read', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Harry Potter English', '', 'item'));
    danhmuccons15.push(new DanhMucCon('VĂN PHÒNG PHẨM', '', 'title'));
    danhmuccons15.push(new DanhMucCon('Quà Lưu Niệm', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Dụng Cụ Học Sinh', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Dụng Cụ Văn Phòng', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Bookmark Cho Mọt Sách', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Giá Kệ Chặn Sách', '', 'item'));
    danhmuccons15.push(new DanhMucCon('CÔNG TY PHÁT HÀNH', '', 'title'));
    danhmuccons15.push(new DanhMucCon('NXB Trẻ', '', 'item'));
    danhmuccons15.push(new DanhMucCon('NXB Kim Đồng', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Nhã Nam', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Alphabooks', '', 'item'));
    danhmuccons15.push(new DanhMucCon('AZ Việt Nam', '', 'item'));
    danhmuccons15.push(new DanhMucCon('First News', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Đinh Tị', '', 'item'));
    danhmuccons15.push(new DanhMucCon('MC Books', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Đông A', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Huy Hoàng', '', 'item'));
    danhmuccons15.push(new DanhMucCon('IPM', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Saigonbooks', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Thái Hà', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Usborne', '', 'item'));
    danhmuccons15.push(new DanhMucCon('DK', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Oxford', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Scholastic', '', 'item'));
    danhmuccons15.push(new DanhMucCon('Cengage', '', 'item'));

    danhmuccons16.push(new DanhMucCon('ƯU ĐÃI TRONG THÁNG', '', 'title'));
    danhmuccons16.push(new DanhMucCon('Du lịch Đà Nẵng - Hội An', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Resort Nghỉ dưỡng FLC', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Vi vi du lịch Hè', '', 'item'));
    danhmuccons16.push(new DanhMucCon('ĐẶT VÉ MÁY BAY', '', 'item'));
    danhmuccons16.push(new DanhMucCon('DỊCH VỤ HOT', '', 'title'));
    danhmuccons16.push(new DanhMucCon('Thẻ cào điện thoại', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Nạp tiền điện thoại', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Thẻ game', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Thẻ 3G/4G', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Sim 3G/4G - Bộ phát wifi', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Phiếu quà tặng Tiki', '', 'item'));
    danhmuccons16.push(new DanhMucCon('NHÀ HÀNG - ĂN UỐNG', '', 'title'));
    danhmuccons16.push(new DanhMucCon('Buffet', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Nhà hàng - Quán ăn', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Cà phê - Kem - Bánh', '', 'item'));
    danhmuccons16.push(new DanhMucCon('SPA - LÀM ĐẸP', '', 'title'));
    danhmuccons16.push(new DanhMucCon('Chăm sóc da', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Massage body, foot', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Làm tóc, nail', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Thẩm mỹ viện', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Gym, Yoga', '', 'item'));
    danhmuccons16.push(new DanhMucCon('SỰ KIỆN GIẢI TRÍ', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Ca nhạc - Phim - Kịch', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Vui chơi - Giải trí', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Studio - Chụp ảnh', '', 'item'));
    danhmuccons16.push(new DanhMucCon('NHA KHOA - SỨC KHỎE', '', 'title'));
    danhmuccons16.push(new DanhMucCon('Nha Khoa', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Khám sức khỏe tổng quát', '', 'item'));
    danhmuccons16.push(new DanhMucCon('BẢO HIỂM', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Bảo hiểm sức khỏe', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Bảo hiểm du lịch', '', 'item'));
    danhmuccons16.push(new DanhMucCon('SỰ KIỆN THỂ THAO', '', 'item'));
    danhmuccons16.push(new DanhMucCon('DU LỊCH - KHÁCH SẠN', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Khách sạn - Resort', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Tour du lịch', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Vé tham quan', '', 'item'));
    danhmuccons16.push(new DanhMucCon('KHÓA HỌC ONLINE', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Ngoại ngữ', '', 'title'));
    danhmuccons16.push(new DanhMucCon('Kinh doanh - Marketing', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Vi tính văn phòng', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Thiết kế đồ họa & video', '', 'item'));
    danhmuccons16.push(new DanhMucCon('IT và lập trình', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Nuôi dạy con', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Nghệ thuật', '', 'item'));
    danhmuccons16.push(new DanhMucCon('Kế toán - Tài chính - Đầu tư', '', 'item'));




    danhmucs.push(new DanhMuc('Điện thoại - Máy tính bảng', 'DTMTB', 'fas fa-mobile-alt', 'media/menu-hover/dt-mtb.jpg', danhmuccons1));
    danhmucs.push(new DanhMuc('Điện tử - Điện lạnh', 'DTDL', 'fas fa-tv', 'media/menu-hover/dt-dl.jpg', danhmuccons2));
    danhmucs.push(new DanhMuc('Phụ kiện - Thiết bị số', 'PKTBS', 'fas fa-headphones-alt', 'media/menu-hover/pk-tbs.jpg', danhmuccons3));
    danhmucs.push(new DanhMuc('Laptop - Thiết bị IT', 'LTTBIT', 'fas fa-laptop', 'media/menu-hover/lt-tbit.jpg', danhmuccons4));
    danhmucs.push(new DanhMuc('Máy Ảnh - Quay Phim', 'MAQP', 'fas fa-camera', 'media/menu-hover/ma-qp.png', danhmuccons5));
    danhmucs.push(new DanhMuc('Điện Gia Dụng', 'DGD', 'fas fa-calculator', 'media/menu-hover/dgd.jpg', danhmuccons6));
    danhmucs.push(new DanhMuc('Nhà Cửa Đời sống', 'NCDS', 'far fa-lightbulb', 'media/menu-hover/ncds.jpg', danhmuccons7));
    danhmucs.push(new DanhMuc('Hàng Tiêu Dùng - Thực Phẩm', 'HTDTP', 'fas fa-wine-bottle', 'media/menu-hover/htd-tp.jpg', danhmuccons8));
    danhmucs.push(new DanhMuc('Đồ chơi, Mẹ & Bé', 'DCMB', 'fas fa-baby', 'media/menu-hover/dc-mb.jpg', danhmuccons9));
    danhmucs.push(new DanhMuc('Làm đẹp - sức khỏe', 'LDSK', 'fas fa-paint-brush', 'media/menu-hover/ld-sk.jpg', danhmuccons10));
    danhmucs.push(new DanhMuc('Thời trang - Phụ kiện', 'TTPK', 'fas fa-tshirt', 'media/menu-hover/dt-mtb.jpg', danhmuccons11));
    danhmucs.push(new DanhMuc('Thể Thao - Dã Ngoại', 'TTDN', 'fas fa-volleyball-ball', 'media/menu-hover/tt-dn.jpg', danhmuccons12));
    danhmucs.push(new DanhMuc('Xe Máy, Ô tô, Xe đạp', 'XMOTXD', 'far fa-car-alt', 'media/menu-hover/xm-ot-xd.jpg', danhmuccons13));
    danhmucs.push(new DanhMuc('Hàng Quốc Tế', 'HQT', 'fas fa-globe', 'media/menu-hover/hqt.png', danhmuccons14));
    danhmucs.push(new DanhMuc('Sách, VPP & Quà Tặng', 'SVPPQT', 'fas fa-book-open', 'media/menu-hover/s-vpp-qt.jpg', danhmuccons15));
    danhmucs.push(new DanhMuc('Voucher - Dịch Vụ - Thẻ Cào', 'VDVTC', 'fas fa-money-check', 'media/menu-hover/vc-dv-tc.jpg', danhmuccons16));

    return danhmucs;
}

function dataDealHot() {
    dealHot.push(new DealHot('English Grammar in Use Book w Ans',  '162.822 ₫', '178.000 ₫','-9%', '0', 'media/deal-hot/deal-6.jpg', ''));
    dealHot.push(new DealHot('Luyện Thi Vào Lớp 10 Môn Ngữ Văn Chuyên Đề Nghị Luận Xã Hội', '75.199 ₫',  '93.000 ₫','-20%','0', 'media/deal-hot/deal-7.jpg', ''));
    dealHot.push(new DealHot('Sách Giáo Khoa Bộ Lớp 4 - Sách Bài Học Phía Nam (Bộ 9 Cuốn) (2020)', '80.962 ₫',  '87.000 ₫','-7%', '2', 'media/deal-hot/deal-8.jpg', ''));
    dealHot.push(new DealHot('Áo Chống Nắng Nam Nữ, Áo Nắng Nam Nữ FAJA Chất Liệu Cotton Cao Cấp', '99.000 ₫', '250.000 ₫', '-61%', '3', 'media/deal-hot/deal-9.jpeg', ''));
    dealHot.push(new DealHot('Bình Giữ Nhiệt Hero Bằng Thép Không Gỉ Lock&Lock- LHC4112B - 400Ml', '246.000 ₫', '545.000 ₫', '-55%', '0', 'media/deal-hot/deal-10.jpg', ''));
    dealHot.push(new DealHot('Thang nhôm rút đôi SUMIKA SK560D (2.8M+2.8M) - rút chữ I cao 5.6m, rút chữ A cao 2.8m, tải trọng 300kg', '2.330.000 ₫',  '3.100.000 ₫','-25%', '0', 'media/deal-hot/deal-11.jpg', ''));
    dealHot.push(new DealHot('Ví Bóp Nam Nữ Thời Trang Nhỏ Gọn Cardholder Galaxy Store GVMB05 (8x12cm)', '82.000 ₫',  '150.000 ₫','-46%', '0', 'media/deal-hot/deal-13.jpg', ''));
    dealHot.push(new DealHot('Combo 6 Gói Khăn Ăn Posy 150 Tờ 2 Lớp ( Dạng Rút)', '44.100 ₫', '60.000 ₫', '-27%', '0', 'media/deal-hot/deal-14.png', ''));
    dealHot.push(new DealHot('Dung dịch rửa xe không chạm Ekokemika Bio 25- 1L', '109.000 ₫', '130.000 ₫','-17%', '0', 'media/deal-hot/deal-15.jpg', ''));
    dealHot.push(new DealHot('Tấm đệm lót hạt gỗ 12mm massage DL01 (giao màu ngẫu nhiên)', '98.000 ₫', '125.000 ₫', '-22%', '0', 'media/deal-hot/deal-12.jpg', ''));

    console.log(dealHot);
    
    return dealHot;
}

function dataIntrustry(){
    industry.push(new Industry('Áo khoác namn','media/industry-hot/idh-1.jpg',''));
    industry.push(new Industry('Nồi cơm điện','media/industry-hot/idh-2.jpg',''));
    industry.push(new Industry('Tai nghe','media/industry-hot/idh-5.png',''));
    industry.push(new Industry('Sách kinh tế','media/industry-hot/idh-6.jpg',''));
    industry.push(new Industry('Cà men, hộp đựng cơm','media/industry-hot/idh-5.jpg',''));
    industry.push(new Industry('Quạt hơi nước, phun sương','media/industry-hot/idh-3.png',''));

    return industry;
}
function dataKeyHot(){
    keyHot.push(new KeyHot('Áo khoác nam','#5e5545',''));
    keyHot.push(new KeyHot('Sách','#974e06',''));
    keyHot.push(new KeyHot('Đắc nhân tâm','#99272e',''));
    keyHot.push(new KeyHot('999 bức thư gửi chính mình','#5c0a6b',''));
    keyHot.push(new KeyHot('sách hay','#5e5545',''));
    keyHot.push(new KeyHot('đàn ông sao hỏa, đàn bà sao kim','#006d90',''));
    keyHot.push(new KeyHot('tuổi trẻ đáng giá bao nhiêu','#00345d',''));
    keyHot.push(new KeyHot('muôn kiếp nhân sinh','#5c0a6b',''));
    
    return keyHot;
}

function fillDataMenu() {

    var e = '';
    for (let i = 0; i < danhmucs.length; i++) {
        e = e + `<li class="nav-item nav-item-custom" data-code=${danhmucs[i].code}>
                        <a class="nav-link text-secondary" href="#">
                        <i class="${danhmucs[i].icon} mr-2"> </i>
                        ${danhmucs[i].ten}</a>
                    </li>`;

    }
    return e;
}

function fillDataMenuSub(danhmuccon) {

    var e = '';
    for (let i = 0; i < danhmuccon.length; i++) {
        if (danhmuccon[i].type == 'title') {
            e = e + `<li class="menu-hover-item menu-hover-title">${danhmuccon[i].ten}</li>`;
        } else {
            e = e + `<li class="menu-hover-item">${danhmuccon[i].ten}</li>`;
        }


    }
    return e;
}

function fillDataDealHot(dealHot) {
  
    var e = '';
    for (let i = 0; i < dealHot.length; i++) {
        e = e + `<article class="deal-box p-2  position-relative">
        <img src="${dealHot[i].img}" alt="" class="img-fluid deal-img">
        <p class="deal-text text-break">${dealHot[i].title}</p>
        <p class="h6 text-dark">${dealHot[i].price1} đ
          <small class="text-muted text-truncate"><s>${dealHot[i].price2}</s></small>
        </p>
        <span class="deal-tag position-absolute fixed-top "> ${dealHot[i].percent}</span>
        <div class="row">
          <div class="progress progress-custom col-5 offset-1 pl-0 position-relative">
            <div class="progress-bar progress-bar-custom" role="progressbar" style="width: ${dealHot[i].quantitySale}%;"
              aria-valuemin="0" aria-valuemax="100"></div>
            <small class="progress-text position-absolute">vừa mở bán</small>
          </div>

          <div class="col-6">
            <small>0 ngày 12:05:05</small>
          </div>
        </div>
      </article>`;

    }
    return e;

}


function fillDataIntrustry(industry){

    var e = '';
    for (let i = 0; i < industry.length; i++) {
        e = e + `<div class="col-md-2  box-industry">
        <figure class="px-4 py-5 bg-white h-100">
          <img src="${industry[i].img}" alt="" class=" img-industry ml-4">
          <figcaption class="text-industry mt-1">${industry[i].title}</figcaption>
        </figure>
      </div>`;

    }
    return e;
}
function fillDataKeyHot(keyhot) {
    var e = '';
    for (let i = 0; i < keyhot.length; i++) {
        e = e + ` <div class="col-sm-4 col-md-2 col-lg h-100" >
        <div class="box-keyword h-100" style="background:${keyhot[i].color};">
          <p class="text-keyword">${keyhot[i].title}</p>
        </div>

      </div>`;

    }
    return e;
    
}