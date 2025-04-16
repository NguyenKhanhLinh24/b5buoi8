const images = [
    "https://tse4.mm.bing.net/th?id=OIP.Ygbzcvmx92s4HOKkHgiK9AHaEK&pid=Api&P=0&h=220https://phunugioi.com/wp-content/uploads/2020/02/anh-phong-canh-thien-nhien-dep.jpg",
    "https://img.thuthuatphanmem.vn/uploads/2018/10/08/hinh-anh-tranh-phong-canh-dep_093819984.jpg",
   
  ];
  
  let currentIndex = 0;
  
  function updateImage() {
    document.getElementById("slide").src = images[currentIndex];
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }
  
  // Hiển thị ảnh đầu tiên khi trang load
  window.onload = updateImage;
