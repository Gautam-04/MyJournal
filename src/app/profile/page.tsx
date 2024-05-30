"use client"
import React,{ReactEventHandler, useState} from 'react'
import "./profile.css"
import { MdEditSquare } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import { FaUpload } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NewModal from '@/components/Modals/NewModal';
import Image from "next/image";
import Header from '@/components/Header/Header';
import { useRouter } from 'next/navigation';

type Props = {}

type ValuePiece = Date | null;

const page:React.FC<Props> = () => {
  const router = useRouter()

    const [profile_tagline, setProfileTagline] = useState<string | number>("");
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const [title, setTitle] = useState<string | number>("");
    const [date,setDate] = useState<ValuePiece>(new Date())
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedName, setSelectedName] = useState<string>("");
    

    const openModal = () => {
        setModalOpen(true);
      };

      const closeModal = () => {
        setModalOpen(false);
      };

    function handleEditClick(e: React.FormEvent){
        e.preventDefault();
        console.log(profile_tagline);
    }

    function createNewJournal(e: React.FormEvent){
        e.preventDefault();
        openModal();
    }

    const handleFileChange = (event: any) => {
      const file = event.target.files[0];
    setSelectedFile(file);
    setSelectedName(file.name);
    // Additional validation logic
      // Additional validation logic
    };

      function handleSubmit(e: React.FormEvent) {
        console.log(title,date);
        e.preventDefault();
        router.push("/journal")
      }

  return (
    <>
    <Header />
    <main>
      <div className="profile_info_div">
        <div className="profile_image_div">
          <Image
            src="https://imgs.search.brave.com/_QS-C_ZdFRoEEb83lITyO3dY1Y6syO6ywUb65b2ZRcQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw"
            className="profile_image"
            width={500}
            height={500}
            alt="Picture of the author"
            />
        </div>
        <div className="profile_details">
          <h1>User_Name</h1>
          <div className="TagLine">
            <textarea
              className="tagline_textarea"
              rows={5}
              cols={100}
              placeholder="Enter your one line intro...."
              name="profile_tagline"
              value={profile_tagline}
              onChange={(e) => {
                setProfileTagline(e.target.value);
              }}
              />
            <MdEditSquare
              onClick={handleEditClick}
              width={20}
              height={20}
              className="textarea_edit"
              />
          </div>
        </div>
      </div>
      <div className="profile_add_button_div">
        <button
          onClick={createNewJournal}
          type="submit"
          className="profile_createnew_button"
          >
          <IoAddSharp
            width={100}
            height={100}
            className="profile_createnew_addicon"
            />
        </button>
      </div>
      <NewModal isOpen={modalOpen} onClose={closeModal}>
        <div className="modal_handler">
          <h2 style={{ textAlign: "center" }}>Create New Journal</h2>
          <div className="profile_newInputs">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="profile_newInputs">
            <label>Date:</label>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
          </div>
          {/* <div className="profile_newInputs custom-file-input-label">
            <label for="custom-file-input">Select a Banner</label>
            <input
            type="file"
            className="custom-file-input"
              onChange={(e) => {
                console.log(e.target.value);
              }}
              accept="image/png, image/jpg, image/gif, image/jpeg"
              />
            </div> */}
          <div className="parent">
            <div className="file-upload">
              <FaUpload width={50} height={50} />
              <h3> {selectedName || "Click box to upload"}</h3>
              <p>Upload a banner (Max 10Mb)</p>
              <input type="file" onChange={handleFileChange} />
            </div>
          </div>
        </div>
        <div className="modal_button_group">
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button onClick={closeModal}>Close</button>
        </div>
      </NewModal>
    </main>
  </>
  )
}

export default page