import Button from "./Button";

0// tham so props
// {title: tieu de tour
//  image: hinh anh}
function TourCart (props){
    return(
        <div>
            
            <img src={props.image} alt={props.title} width={500} />
            <h3 className="frot-semibold">{props.title}</h3>
            <div className="flex gap-4 mt-2">
                <Button label="xem chi tiet" />
                <Button label="dat tour" />

            </div>
        </div>
    )

}

export default TourCart;