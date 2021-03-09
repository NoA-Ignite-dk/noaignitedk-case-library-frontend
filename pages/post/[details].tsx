
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import algoliasearch from 'algoliasearch';
import s from './[details].module.scss';
import ReactHtmlParser from 'react-html-parser';

const client = algoliasearch('ZY2QYX1R0L', 'e8b08bc3dceb9ccd66698c4defc6a566');
const index = client.initIndex('dev_cases');

export interface IInputObject {
    client_name: string;
    title: string;
    long_text: string;
    keywords: string;
    image_1: string;
    image_2: string;
    image_3: string;
    link_1: string;
    link_2: string;
    agency: string;
    contact_person_name: string;
    contact_person_email: string;
}

const Details = () => {

    const router = useRouter()
    const { details } = router.query
    var details_string = "";
    if (typeof (details) == "string") {
        details_string = details;
    }
    const [object, setObject] = useState<IInputObject | any>({ client_name: "", title: "", long_text: "", keywords: "", image_1: "", image_2: "", image_3: "", link_1: "", link_2: "", agency: "", contact_person_name: "", contact_person_email: "" });

    useEffect(() => {
        if (details_string) {
            index.getObject(details_string).then(object => {
                var newObject = {} as any;
                newObject = object;
                newObject.keywords = newObject.keywords.toString().replace(/,/g, ' - ')
                setObject(newObject)
            });
        }
    }, [details])

    return (
        <>
            {object ?
                <>
                    <div className="container">

                        <p className={s.client_name}>{object.client_name}</p>
                        <h1 className={s.test}>{object.title}</h1>
                        <br />
                        <p className="long_text">{ReactHtmlParser(object.long_text)}</p>
                        <br />
                        <p><strong>Keywords: </strong> {object.keywords}</p>
                        <br />
                        <img className={s.details_img} src={object.image_1} />
                        <img className={s.details_img} src={object.image_2} />
                        <img className={s.details_img} src={object.image_3} />
                        <br />
                        {object.link_1 ?
                            <a href={object.link_1}>Link1</a>
                            : ""
                        }
                        <br />
                        {object.link_1 ?
                            <a href={object.link_2}>Link2</a>
                            : ""
                        }
                        <p><strong>Agency: </strong>{object.agency}</p>
                        <p><strong>Contact person name: </strong>{object.contact_person_name}</p>
                        <p><strong>Contact person e-mail: </strong>{object.contact_person_email}</p>
                    </div>
                </> : <h1>Error</h1>
            }

        </>
    )
}

export default Details
