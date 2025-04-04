/*
    Single-file component
    - 1 component = 1 file -> dễ dàng tái sử dụng, dễ quản lý
*/

/*
    Có 2 cách để quản lý và tổ chức các component là: Options API và Compositions API
    - Options API là cách truyền thống được sử dụng trước khi Composition ra đời
     + Options api được chia làm 3 phần chính: data, methods và mounted
     + Thích hợp với các dự án nhỏ
    - Compositions:
     + Giúp linh hoạt và tái sử dụng tốt hơn options api
     + Giúp giản bớt sự phức tạp của các component lớn bằng cách chia nhỏ
       logic thành các phần nhỏ hơn, dễ quản lý hơn
*/

/*
    Directives: Là các thuộc tính có tiền tố v-
    Example: v-html v-bind v-if v-else v-text
*/

/*
  DOM ảo: Virtual DOM (DOM ảo) là một khái niệm giúp cải thiện hiệu suất khi cập nhật giao diện.
          Thay vì thao tác trực tiếp trên DOM thật, Vue.js (cũng như React) tạo ra một bản sao DOM ảo,
          thực hiện các thay đổi trên đó trước, rồi mới áp dụng sự thay đổi tối ưu lên DOM thật.
*/

/*
  Vòng đời của Vue
  1. Khởi tạo (Initialization)
  2. Mounting (Gắn vào DOM)
  3. Updating (Cập nhật)
  4. Unmounting (Gỡ khỏi DOM)
*/

/*
  Các hook trong vue
  onMounted, onUnmounted, onBeforeMounted, onBeforeUnmounted, onUpdated, onBeforeUpdated
*/

/*
  Watch
  - Deep: mặc định là true, dùng để theo dõi sâu các tầng của object, nếu set là false
          thì chỉ theo dõi thay đổi của tầng đầu tiên
  - Immediate: mặc định là false, watch chỉ chạy khi có sự thay đổi của source, nhưng nếu set
               Immediate thành true thì sẽ chạy luôn khi component mounted
  watchEffect:
    + Chỉ trả về newValue, ko trả oldValue. Chạy luôn khi component mouted mà ko cần
  truyền immediate
    + Không cần chỉ định source, watchEffect tự theo dõi các ref được sử dụng trong nó
*/

/*
  Template Ref:
   + Sử dụng khi cần thao tác trực tiếp với DOM thật
*/

/*
  Props
   + Component cha truyền dữ liệu xuống component con thông qua props.
   + Props chỉ có thể được thay đổi từ component cha (component con không thể sửa trực tiếp props).
   + Có 2 loại props là prop tĩnh và prop động, prop động sẽ có thêm dấu : ở đằng trước
*/

/*
  Global Component
  Có thể sử dụng ở bất kỳ đâu mà không cần import
*/

/*
  Component V-model
  Sử dụng để thay đổi dữ liệu 2 chiều, con -> cha và cha -> con
*/

/*
  Slot
  Slot cho phép bạn chèn nội dung từ component cha vào trong component con, giống như kiểu “lỗ trống” để nhét nội dung vào.
  Nó giúp component trở nên linh hoạt hơn, không bị “cứng” về giao diện.
*/


/*
 Provide và Inject
 provide: Dùng trong component cha để “cung cấp” dữ liệu.
  inject: Dùng trong component con hoặc cháu để “nhận” dữ liệu đó.
  👉 Nó giống như một “ống truyền ngầm” giữa cha và con sâu bên dưới.
*/

/*
  Async Component
  Async Component (Component bất đồng bộ) là component được load "lười" (lazy-load) — nghĩa là chỉ tải khi thật sự cần, thay vì tải toàn bộ ứng dụng ngay từ đầu.
  👉 Vue sẽ trì hoãn việc import component cho đến khi component đó được render lần đầu.
*/