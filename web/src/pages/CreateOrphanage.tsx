import React, { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";

import { Map, Marker, TileLayer } from 'react-leaflet';
import {LeafletMouseEvent} from 'leaflet'

import mapIcon from '../utils/mapIcon';
import { FiPlus } from "react-icons/fi";

import Aside from "../components/Aside";

import '../styles/pages/create-orphanage.css';

export default function CreateOrphanage() {

  const history = useHistory();

  const[name, setName] = useState('');
  const[about, setAbout] = useState('');
  const[instructions, setInstructions] = useState('');
  const[opening_hours, setOpeningHours] = useState('');
  const[open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([],);
  const [previewImages, setPreviewImages] = useState<string[]>([],);

  const [position, setPosition] = useState({
    latitude: 0, longitude: 0
});

  function handleMapClick(event: LeafletMouseEvent){
    const {lat, lng} = event.latlng;
    setPosition({
      latitude: lat, 
      longitude: lng
    });
  };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const {latitude, longitude} = position;
    
    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends',  String(open_on_weekends));

    images.forEach(image => {
      data.append('images', image);
    })
    // é eu sei o nome da rota ta grande kkkkk
    await api.post('orphanages/create-orphanages');

    alert('Register successfully')

    history.push('/app')
  };

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if(!event.target.files) {
      return;
    }
    const selectedImages = Array.from(event.target.files)
    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image)
    });

    setPreviewImages(selectedImagesPreview);
  };

  return (
    <div id="page-create-orphanage">

      <Aside />
      
      <main>
        <form className="create-orphanage-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Orphanage Data</legend>

            <Map 
              center={[44.0404315, -101.6743827]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              {/* <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              /> */}
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
             
              { position.latitude !== 0 && (
                <Marker 
                  interactive={false} 
                  icon={mapIcon} 
                  position={[
                    position.latitude,
                    position.longitude
                  ]} 
                /> 
              )}
            </Map>  

            <div className="input-block">
              <label htmlFor="name">Name</label>
              <input 
                id="name" 
                value={name}
                onChange={event => setName(event.target.value)}  
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">About<br/> 
                <span>Write a maximum of 300 characters</span>
              </label>
              <textarea 
                id="name" maxLength={300} 
                value={about}
                onChange={event => setAbout(event.target.value)}  
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Photos<br/>
                <span>Add a maximum 6 Images</span>
              </label>
              
              <div className="images-container">
                { previewImages.map(image => {
                  return(
                    <img 
                      key={image} 
                      src={image} 
                      alt={name} 
                    />
                  );
                })}
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
                <input multiple onChange={handleSelectImages} type="file" id="image[]"/>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitations</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instructions</label>
              <textarea 
                id="instructions" 
                value={instructions}
                onChange={event => setInstructions(event.target.value)}  
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Opening Hours</label>
              <input 
                id="opening_hours" 
                value={opening_hours}
                onChange={event => setOpeningHours(event.target.value)}  
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Open Weekends</label> 

              <div className="button-select">
                <button 
                  type="button" 
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Yes
                </button>
                <button   
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  No
                </button>
              </div>
            </div>
          </fieldset>
          <button className="confirm-button" type="submit">
            Confirm
          </button>
        </form>
      </main>
    </div>
  );
}
