1. So sánh zustand với useContext và redux: 
 - Khái niệm Zustand, useContext và Redux?
  + Zustand: Là một thư việc quản lý các trạng thái khác nhau và được thiết kế riêng cho React, nó cung cấp một cách đơn giản
  và nhẹ để quản lý trạng thái các components. Zustand sử dụng các React Hooks trong các components để truy cập và cập nhật các trạng 
  thái khác nhau một cách dễ dàng và tiện lợi.

  + UseContext: Là một hook của React, cho phép chia sẽ data giữa các components khác nhau mà ta không cần phải truyền props và cho từng
  component. Để chứa các trạng thái khác nhau thì useContext tạo ra một Context Object và để truyền tải các trạng thái đã thay đổi trong 
  Context Object đó thì useContext sử dụng một Provider Component để truyền những giá trị trạng thái đã thay đổi xuống các component con.

  + Redux: Là một thư viện cũng để quản lý trạng thái tương tự và được phổ biến trong các ứng dụng của JS nói riêng và React nói chung.
  Nó tạo ra một store toàn cục để chứa toàn bộ trạng thái dữ liệu của ứng dụng và cho phép các component kết nối với nhau thông qua Store bằng cách sử dụng `mapStateToProps` và `mapDispathcToProps`. Ngoài ra Redux còn sử dụng reducers để xác định sự cập nhật trạng thái khi có 
  các actionType gửi lên store.

  - Sự so sánh: Vì mỗi loại đều có những ưu điểm và nhược điểm riêng nên ở đây ta chỉ bàn về độ phức tạp, hiệu suất và tối 
   + Về độ phức tạp: 
     . useContext: Đây là một hook có sẵn của React không cần cài thêm thư viện bên ngoài. Như phần khái niệm đã đề cập nó sử dụng
     Context Object trong component để truy cập vào các giá trị trạng thái, tuy nhiên việc quản lý và phạm vi sử dụng rất phức tạp 
     không phù hợp.

     . Zustand: Đây là một thư viện React state management nhưng đơn giản và dễ sử dụng với mọi người. Nó giúp quản lý các trạng thái
    một cách dễ dàng và thuận tiện, và đồng thời có thể cập nhật trạng thái ở bất kì component nào. Zustand không yêu cầu cấu hình cao như 
    Redux nên thích hợp với những project dạng vừa và nhỏ do tính thuận tiện dễ sử dụng. Tuy nhiên cũng có vài nhược điểm cần lưu ý, tuy Zustand cũng có cung cấp tài liệu và ví dụ đầy đủ nhưng hiện nay cộng đồng sử dụng Zustand không lớn nên sẽ gặp khó khăn trong việc tìm kiếm giải pháp hoặc hỗ trợ. Hoặc Zustand có thể gây ra hiệu suất kém khi có nhiều component sử dụng chung một store.

    . Redux: Đây cũng là một thư viện phổ biến trong React và cả JS. Đây là thư viện quản lý trạng thái phức tạp và yêu cầu cấu hình và cách sử dụng các khái niệm của nó như reducers, action và store. Vì đây là thư viện phức tạp nên nó tuân thủ các nguyên tắc của lập trình hàm để đảm bảo tính dự toán và kiểm tra được các trạng thái. Nó được ứng dụng nhiều trong các ứng dụng có sự quản lí phức tạp về các trạng thái, cũng như có thể thiết kế lại phù với cách dự án sử dụng. Tuy phức tạp là vậy nhưng Redux có một cộng đồng đông đảo người sử dụng nên việc tìm tài liệu hoặc thông tin hữu ích bên ngoài Docs của Redux cũng khả thi, ngoài ra nó còn có thêm một vài thư việc và tiện ích hỗ trợ cho việc sử dụng trở nên dễ dàng và thuận tiện hơn

  + Về hiệu năng (hiệu suất và tối ưu): 
    . useContext: Khi có sự thay đổi về mặt giá trị trạng thái của Context, thì tất cả các compoent sử dụng useContext đều phải được cập nhật lại dẫn đến việc re-render không cần thiết trong rất nhiều trường hợp gấy kém về mặt hiệu năng. Đồng thời không có các công cụ hỗ trợ như `Devtool`, `Middleware`, ....

    . Zustand: Sử dụng kỹ thuật dựa trên Proxy(?) để theo dõi sự thay đổi của trạng thái. Khi một trạng thái thay đổi thì chỉ những component sử dụng trạng thái được thay đổi đó mới bị re-render giúp cải thiện rất nhiều về mặt hiệu năng. Các cấu hình hay khái niệm phức tạp về thư mục hay middleware đều được giản lược dẫn đến hiệu năng cũng đc tăng cao.

    . Redux: Sử dụng các cơ chế như là "Immutable"(?) và "Change Detection" để theo dõi sự thay đổi của các trạng thái. Nhưng để đạt hiệu suất tối ưu nhất thì cần cấu hình phức tạp hơn cho redux
  
  2. Những thay đổi của NEXT JS version 13.4.3:
   - Turbopack(BETA): giúp tăng tốc và ổn định SS, sử dụng trình biên dịch RUST(?) để biên dịch các file TS và JSX một cách nhanh chóng, an toàn và hiệu quả
   - NEXT App Router: hỗ trợ các tính năng về phía SS như là
      + React Server Components
      + Nested Routes & Layouts
      + Simplified Data Fetching
      + Streaming & Suspense
      + Built-in SEO Support
  - Sever Action(Alpha): Hỗ trợ thay đổi dữ liệu bên SS nhưng không cần truy cập vào nguồn của CS
#   n e x t - a p p - d e m o  
 