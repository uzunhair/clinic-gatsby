import React from 'react';
import { Script } from "gatsby";

const FormAd = () => {
  return (
    <div style={{position: 'relative'}}>
    <iframe 
    src="https://api.leadconnectorhq.com/widget/form/GPDAFokS49LWoRbjQXv8" 
    style={{width:'100%', height:'100%', border:'none', borderRadius:'4px'}}
    id="inline-GPDAFokS49LWoRbjQXv8" 
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="Yandex - LP"
    data-height="450"
    data-layout-iframe-id="inline-GPDAFokS49LWoRbjQXv8"
    data-form-id="GPDAFokS49LWoRbjQXv8"
    title="Yandex - LP"
    />
    <Script src="https://link.msgsndr.com/js/form_embed.js" />
    </div>
    )
};

export default FormAd;