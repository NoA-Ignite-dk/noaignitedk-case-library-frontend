import React, {useState } from 'react';
import Head from 'next/head';
import algoliasearch from 'algoliasearch';
import { useForm } from "react-hook-form";
import s from './create.module.scss';
import { DefaultEditor } from 'react-simple-wysiwyg';
import { useRouter } from 'next/router'


export const Create = () => {
  const router = useRouter()
  const client = algoliasearch('ZY2QYX1R0L', '5e343568860fe0cd6534656f84600350');
    const index = client.initIndex('dev_cases');

  type Case = {
    client_name: string;
    keywords: string[];
    title: string;
    short_text: string;
    long_text: string;
    image_1: string;
    image_2: string;
    image_3: string;
    link_1: string;
    link_2: string;
    agency: string;
    contact_person_name: string;
    contact_person_email: string;
    keywords_string: string;

}
  const [inputValue, setValue] = useState("");
  
    const { register, handleSubmit, errors } = useForm<Case>();
    const onSubmit = (data: Case) => {
        data.keywords = data.keywords_string.split(',')
        index.addObject(data)
        router.push('/')

      };
    return(
      
        <>
        <div className="container">
        
        <Head>
            <title>Create new case</title>
        </Head>
        <h1 className={s.h1}>Create new case</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className={s.label} htmlFor="client_name">Client name</label>
          <input
            className={s.input}
            type="text"
            id="client_name"
            name="client_name"
            ref={register({required: true})}
            
          />
          {errors.client_name && errors.client_name.type === "required" && (
          <div className={s.error}>You must enter your Client name.</div>
        )}
        </div>
        <div className="field">
          <label className={s.label} htmlFor="keywords_string">Keywords</label>
          <input
            className={s.input}
            type="text"
            id="keywords_string"
            name="keywords_string"
            ref={register}
            placeholder="keyword1,keyword2 ..."
          />
        </div>
        <div className="field">
          <label className={s.label} htmlFor="title">Title</label>
          <input
            className={s.input}
            type="text"
            id="title"
            name="title"
            ref={register({required: true})}
          />
          {errors.title && errors.title.type === "required" && (
          <div className={s.error}>You must enter title</div>
        )}
        </div>
        <div className="field">
          <label className={s.label} htmlFor="short_text">Short text</label>
          <input
            className={s.input}
            type="text"
            id="short_text"
            name="short_text"
            ref={register({required: true})}
          />
          {errors.short_text && errors.short_text.type === "required" && (
          <div className={s.error}>You must enter your short text.</div>
        )}
        </div>
        <div className="field">
          <label className={s.label} htmlFor="long_text">Long Text</label>
          <input
            className={s.hidden}
            type="text"
            id="long_text"
            name="long_text"
            ref={register({required: true })}
            value={inputValue}
          />
          <div className={s.sameWidth}>
 
          <DefaultEditor value={inputValue} onChange={e => setValue((e.target as HTMLTextAreaElement).value)}/>
          </div>
          {errors.long_text && errors.long_text.type === "required" && (
          <div className={s.error}>You must enter your long text.</div>
        )}
        </div>
        <div className="field">
          <label className={s.label} htmlFor="image_1">Image 1</label>
          <input
            className={s.input}
            type="text"
            id="image_1"
            name="image_1"
            ref={register}
          />
        </div>
        <div className="field">
          <label className={s.label} htmlFor="image_2">Image 2</label>
          <input
            className={s.input}
            type="text"
            id="image_2"
            name="image_2"
            ref={register}
          />
        </div>
        <div className="field">
          <label className={s.label} htmlFor="image_3">Image 3</label>
          <input
            className={s.input}
            type="text"
            id="image_3"
            name="image_3"
            ref={register}
          />
        </div>
        <div className="field">
          <label className={s.label} htmlFor="link_1">Link 1</label>
          <input
            className={s.input}
            type="text"
            id="link_1"
            name="link_1"
            ref={register}
          />
        </div>
        <div className="field">
          <label className={s.label} htmlFor="link_2">Link 2</label>
          <input
            className={s.input}
            type="text"
            id="link_2"
            name="link_2"
            ref={register}
            />
        </div>
        <div className="field">
          <label className={s.label} htmlFor="agency">Agency</label>
          <input
            className={s.input}
            type="text"
            id="agency"
            name="agency"
            ref={register({required: true})}
          />
          {errors.agency && errors.agency.type === "required" && (
          <div className={s.error}>You must enter agency.</div>
        )}
        </div>
        <div className="field">
          <label className={s.label} htmlFor="contact_person_name">Contact person name</label>
          <input
            className={s.input}
            type="text"
            id="contact_person_name"
            name="contact_person_name"
            ref={register({required: true})}
          />
          {errors.contact_person_name && errors.contact_person_name.type === "required" && (
          <div className={s.error}>You must enter Contact person name.</div>
        )}
        </div>
        <div className="field">
          <label className={s.label} htmlFor="contact_person_email">Contact person email</label>
          <input
            className={s.input}
            type="text"
            id="contact_person_email"
            name="contact_person_email"
            ref={register({required: true})}
          />
          {errors.contact_person_email && errors.contact_person_email.type === "required" && (
          <div className={s.error}>You must enter contact person email.</div>
        )}
        </div>
        <button className={s.button}type="submit">Create</button>
      </form>
      </div>
      </>
    );
}

export default Create;
