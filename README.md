Project landing-base là project landing chung, các project landing khác tạo nhánh mới từ nhánh master để dễ dàng quản lý các project landing

# Cách bắt đầu một project landing mới
+ Checkout về lại nhánh master
# Tạo project mới 
    + git checkout -b <Tên project mới>         //Tạo nhánh mới
    + Set protect cho nhánh chính (nhánh vừa checkout): https://docs.gitlab.com/ee/user/project/protected_branches.html#configuring-protected-branches
    + vào file ecosystem.config.js: thay đổi tên (Vd: daotao-ftu-landingpage)
# Cách start project mới 
    + npm run dev: Chạy project dev (Chạy mới build - localhost: 3000) 
    + npm run build: Build project (sau khi build sẽ ở folder .next)
    + npm run start: Chạy project sau khi build

# Cách dùng project landing-base
    https://docs.google.com/document/d/16-RPUZUVr3fp5lMeOwWDmfdvsGmNB1idaImGW7sMsbw/edit#heading=h.dmjqcze1qr85
