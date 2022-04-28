import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cart = () =>{
    const useCtx = useContext(CartContext)
    return(
        <>
        <Box className="boxTitle">
        <h1>CARRITO DE COMPRAS 🛒</h1>
        </Box>
        <Box className="boxButtons">
        <Link to ='/' style={{textDecoration: 'none'}}><Button variant='contained' color='success'>CONTINUAR COMPRANDO</Button></Link>
        <Button variant="outlined" color="error" onClick={()=>useCtx.clearCartList()}>ELIMINAR TODO</Button>
        </Box>
        <Box className="boxContainer">
            {
                (useCtx.cartList.length > 0 ) ?
                useCtx.cartList.map(item =>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.itemIMG}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Producto: {item.itemName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Precio:$ {item.itemPrice}<br />
                            Cantidad: {item.itemQty}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="error" onClick={()=>useCtx.removeItem(item.itemID)}>ELIMINAR PRODUCTO</Button>
                        </CardActions>
                    </Card>
                    )
                :<p>Tu carrito está vacío</p>
            }
        </Box>
        <Box>
            <h3>Resumen del pedido</h3>
            <p><span>SUBTOTAL:</span>{useCtx.subTotal()}</p>
            <p><span>IVA:</span>{useCtx.IVA()}</p>
            <h5>TOTAL: {useCtx.totalToPay()}</h5>
            <Button variant="outlined" color="success">TERMINAR COMPRA</Button>
        </Box>
        </>
    );
}
export default Cart;