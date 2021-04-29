(function() {
    function upload(file) {
       const formData =  new FormData();
       formData.append('file',file);
       axios.post('http://zhanglongfeng:4040/upload',formData).then(res => {
           console.log('res',res);
       }).catch(err => {
        console.log('err',err);
       })
    }

    console.log('axios',axios);
    const fileDom = document.querySelector('.J-file-select');
    fileDom.addEventListener('change', (e) => {
        console.log(e);
        const file = e.target.files && e.target.files[0];
        upload(file);
    })

})();