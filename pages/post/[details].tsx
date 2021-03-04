
import { useRouter } from 'next/router'
import React, { FunctionComponent, useEffect, useState } from 'react';
import algoliasearch from 'algoliasearch';
import { object } from 'prop-types';
import s from './[details].module.scss';
import ReactHtmlParser from 'react-html-parser';

const client = algoliasearch('ZY2QYX1R0L', 'e8b08bc3dceb9ccd66698c4defc6a566');
const index = client.initIndex('dev_cases');

const Details = () => {

const router = useRouter()
const { details } = router.query
 const [object,setObject] = useState({})
  
useEffect(()=>{
    if(details){
    index.getObject(details).then(object => {
        setObject(object)

      });
    }
},[details])
  
  return (
    <>
    {object ? 
     <> 
     <div className="container">
     <p className={s.client_name}>{object.client_name}</p>
     <h1 className={s.test}>{object.title}</h1>
     <p className="long_text">{ ReactHtmlParser (object.long_text) }</p>
     <p>{object.keywords}</p>
     <img className={s.details_img}src={object.image_1}/>
     <img className={s.details_img} src={object.image_2}/>
     <img className={s.details_img} src={object.image_3}/>
     <br/>
     <a href={object.link_1}>Link1</a>
     <br/>
     <a href={object.link_2}>Link2</a>
     <p>Agency: {object.agency}</p>
     <p>Contact person name: {object.contact_person_name}</p>
     <p>Contact person e-mail: {object.contact_person_email}</p>
     </div>
     </>:<h1>Error</h1>
    }

    </>
  )
}

export default Details
