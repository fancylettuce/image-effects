async function init() {
    let rustApp = null

    try {
      rustApp = await import('../pkg')
    } catch(e) {
      console.error(e)
      return;
    }

    console.log(rustApp)

    const input = document.getElementById('upload')
    const filereader = new FileReader()

    filereader.onloadend = () => {
        let base64 = filereader.result.replace(
            /^data:image\/(png|jpeg|jpg);base64,/, ''
        )
        console.log(input.files[0])
        console.log(base64)
    }

    input.addEventListener('change', () => {
    filereader.readAsDataURL(input.files[0])
    })
}

init()