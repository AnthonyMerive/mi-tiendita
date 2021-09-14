import React from 'react'

export default function Login() {
    return (
        <div className="container">
            <h2 className="center-align">LOGIN</h2>

            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="email" type="email" class="validate" />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="password" type="password" class="validate" />
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 center-align">
                            <button class="btn waves-effect waves-light btn-large amber darken-1" type="submit" name="action">Ingresar
                                <i class="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
