import React from 'react'
import Image from 'next/image';
import { Circle } from 'better-react-spinkit';

function Loading() {
    return (
        <center style={{ display: 'grid', placeItems: 'center', height: '100vh'}}>
            <Image
                style={{ marginBottom: 10 }}
                src="/img/whatsapp-icon-1.png"
                alt="Whatsapp Icon"
                width="200"
                height="200"
            />

            <Circle size={60} color="#3CBC28" />
        </center>
    )
}

export default Loading