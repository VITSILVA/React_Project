import React from 'react'

export default function Dados(props) {
    let n1=20
    let n2=10

    return (
        <section>
            <p>Canal:{props.canal()}</p>
            <p>Youtube:{props.youtube}</p>
            <p>Curso:{props.curso}</p>
            <p>{'A soma de ' + n1 + ' com ' + n2 + ' é igual ' + props.somar(n1,n2)}</p>

        </section>
    )
}