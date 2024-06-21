
const selectionForm= document.getElementById('selection-form')

selectionForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const colorInput = document.getElementById('color-input-selector').value.slice(1)
    const schemeSelector= document.getElementById('scheme-selector').value

    getColorHtml(colorInput,schemeSelector)
  
})

document.addEventListener('click',function(e){
    const targetBox = e.target.dataset.hex
    if(targetBox){
        navigator.clipboard.writeText(targetBox)
        alert("Copied the color: " + targetBox)
        
    }
    
}
)

function getColorHtml(colorApi,scheme){
   

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorApi}&mode=${scheme}&count=5`)
    .then(res=> res.json())
    .then(schemeObject=>{
        const schemeArray = schemeObject.colors
        
        const colorsHtml = schemeArray.map((color)=>`
        <div class='color-block' ">
        <img src="${color.image.bare}" data-hex="${color.hex.value}">
        <p data-hex="${color.hex.value}">${color.hex.value}</p>
        </div>
        `).join("")
        document.getElementById('color-container').innerHTML= colorsHtml
        
    })
}

getColorHtml('000000','monochrome')