
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import algoliasearch from 'algoliasearch';
import s from './[details].module.scss';
import ReactHtmlParser from 'react-html-parser';

const client = algoliasearch('ZY2QYX1R0L', 'e8b08bc3dceb9ccd66698c4defc6a566');
const index = client.initIndex('dev_cases');

const Details = () => {

const router = useRouter()
const { details} = router.query
const [object,setObject] = useState({})
  
useEffect(()=>{
    if(details){
        {/*
 // @ts-ignore */}
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
          {/*
 // @ts-ignore */}
     <p className={s.client_name}>{object.client_name}</p>
      {/*
 // @ts-ignore */}
     <h1 className={s.test}>{object.title}</h1> {/*
 // @ts-ignore */}
     <p className="long_text">{ ReactHtmlParser (object.long_text) }</p>
      {/*
 // @ts-ignore */}
     <p>{object.keywords}</p>
      {/*
 // @ts-ignore */}
     <img className={s.details_img}src={object.image_1}/>
      {/*
 // @ts-ignore */}
     <img className={s.details_img} src={object.image_2}/>
      {/*
 // @ts-ignore */}
     <img className={s.details_img} src={object.image_3}/>
     <br/>
      {/*
 // @ts-ignore */}
     <a href={object.link_1}>Link1</a>
     <br/>
      {/*
 // @ts-ignore */}
     <a href={object.link_2}>Link2</a>
      {/*
 // @ts-ignore */}
     <p>Agency: {object.agency}</p>
      {/*
 // @ts-ignore */}
     <p>Contact person name: {object.contact_person_name}</p>
      {/*
 // @ts-ignore */}
     <p>Contact person e-mail: {object.contact_person_email}</p>
     </div>
     </>:<h1>Error</h1>
    }

    </>
  )
}

export default Details
