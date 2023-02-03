import { Component } from 'react';
import './Rencherir.css';
class Rencherir extends Component {
    render(){
        return (
            <><h1>Renchérir : PSR S975</h1><form class="login" action="" method="post">

                <div><label for="username">Montant</label>
                    <input type="text" name="montant" id="montant" required /></div>

                <div class="actions">
                    <input type="submit" name="rencherir" value="Renchérir" />
                </div>
            </form></>
        );
    }
}
export default Rencherir;