// Alert dismissible function
document.querySelector('.Clinic-alert.Clinic-alert-dismissible .close').onclick = function() {
  document.querySelector('.Clinic-alert').classList.add('Clinic-opacity-0');
  setTimeout(function(){
    document.querySelector('.Clinic-alert').remove();
  }, 1000);
 }