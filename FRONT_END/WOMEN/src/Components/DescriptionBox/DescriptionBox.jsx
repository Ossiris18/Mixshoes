import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () =>{
    return (
        <div className='descriptionbox'>
            <div className="description-navigator">
                <div className="descriptionbox-nav-box">Descripción</div>
                <div className="descriptionbox-nav-box fade">Reviews (+36)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Estos tenis son increíbles. La calidad de los materiales es excelente y la malla transpirable mantiene mis pies frescos durante los entrenamientos. Elegí el modelo negro con detalles en rojo y blanco, y he recibido varios cumplidos. Son cómodos y se adaptaron perfectamente a mis pies después de un par de usos.</p>
                <p>
                La calidad de estos tenis me ha sorprendido. El cuero sintético les da un toque elegante y la malla proporciona buena ventilación. Los colores azul marino y dorado son llamativos y he recibido muchos elogios. Al principio, sentí un poco de roce en el talón, pero se amoldaron rápidamente. Los recomiendo para actividades ligeras o para complementar tu estilo diario.
                </p>
            </div>
        
        </div>
    )
}
export default DescriptionBox