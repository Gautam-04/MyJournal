"use client"
import React,{useState} from 'react'
import { VscSaveAs } from "react-icons/vsc";
import './journal.css'

type Props = {}

const page:React.FC<Props> = () => {
    const [Title, setTitle] = useState<string>("");
    const [Banner, setBanner] = useState<string>("");
    const [Writeup, setWriteUp] = useState<string | number>("");
    const [Date,setDate] = useState<string>("06/03/2024");

    function handleSubmit(e: React.FormEvent) {
      console.log(Title, Date);
      e.preventDefault();
    }

  return (
    <main className="journal_main">
      <div className="paper letter">
        <div className="journal-header">
          <h1>Title of Your Journal</h1>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIA7gMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQACAwEGB//EADQQAAEDAgUCBAQFBQEBAAAAAAEAAgMEERIhMUFRBSITMmFxQlKBwRQjM3KxNJGh0eHwYv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD5mTkUpefDr3SXthN7co6rnEQws7nFBRUck77yOtfZATTStqZXOBde97O2TIZZLCn6dBEB23f83Hqt3gMyc+1t+UFrgC50CywmVwkBwtGx+P39OFwEyHy4R/PqtQbCyDS99re+y7fJZZnRZz1MUEZfIbW25PCDDrWF1NZxtwlzqj8UYmSSO7AALm4Uw1PU5vEtZu3ATKi6NHivK3F6IN6WHA0ADK2qMB7bHTdR0LIGdptGOdG/8S3qPUPAbghIdIRmdcKATqswhrmyQvc2UDMtNihqWP8AETOeXEuvcrak6VPUgzSk92YG5Tmh6PDE2724ZNA4ahBynj8MD2RGINFyqygQOwSHCRv8w5VBeQ4ibAaN490FHRPdMKhm2jPm9/Vbse17GlhuDv8A+3XMV+Vi4PacUeHF8TR8f/UBBJytqgurTRtpnCXM6W5XKjqEEERe113aBg1PuNkrpqWp6tMZC4hu5OgHogBlkfM/8x7nuAwguN0xoKTCAXalNWdEh7QW9rd+SiJqJtMLtJ8O2h+D/iDJjQLAmyD6i10l5IXlrm5Y2ki/oiQ4SC0bvyhqRv7Lr7FmHDZuyDy72nHgLSHXzvyn/RelWtNLwszSDxMY12TSDqcIhPjPEMkY7mH7IDpJWU8LnvcGsYLkk2svHdUrW1tQ98bSyO+Tb6+pXesdTkr5dC2EeVv3KDpwHPseEFGsL3WCZ01OGNtuuxU4aMTfqOUTGWO8gxfZBGwxB93b/wCUXG1rRdqGBz+3KDpq/wAKofHJfAT2kbIHGKwve1km6pWmc+HGPywbuPzFFuk/EmzThjB21ciYoIcPaxo9CgCoK1soLJP1ALXGhCOzA9FrgaWlpaMJGyGqJWQNu47ZW+JBJp2QRmR5sBtz6ICGml6nN40gszYK9PTzV03jTZMGg4TyJrWNDGaAIOQRRxMDIxbDlZENtusT6a8cpX1PqoiaYabF4pyJPwoDqmsjxmFpu8+Y/L6LCGjpWzhzvLq30KVUAscRzJ3OpTYOsPogagNFi3hR8jY2Oe84WtFyeEjpupilmdT1ZOAG8b7aehQ9Z1P8ZPhaSImnIEanlB3qVXU18rHU7D4MTgWnk8lGUtX47S14LJBe7T/K1oXAgWR8rGytDXC/HoUAVztqsKqsbSRFz837DlSsqG0eJsgJeBk0bpXR0k/VKjxJLiPcnS3AQSloanqc75nN7SbuOl/QL1VG2BkAbTtwtGVuPT3UhjZExscYyGQKzmaWu8eEDH8bb2Dx/tAVmche+1kk6x1F0mKjpLOJyke0XA9Byh+q9ba6MQ0eJpt3PIsR6W55Szp85ZKGjc3QMqIVFNGI5o3GPVjhnh9Ci73F73+t7o2kkLozi0OqErWtph4t7RXzv8JQZPe2MY3GzRqUhrZ/xM5cxuWg9VpVzyVkwhjbYX7W+qd0HSY6aIGTulcMzx6IPMmN4fhIsSmFLThljunp6dCf1G57HhLpB4U5hJs+1z/tBbuGTdeeFXwiw/lanM+qvbCLf+KmKyDJzrNKWSNJmy3RjHmYZjDbY7+qsI80EpmFgAdomUZbgGDRBZBhB4QdHWSU73RFmJgOQ+VA4mnZAzE/fIDkrBrhMMbxdx429ksMklVUOfJtkG/KmEWTAEBsEzGN8Miy3BtYAkApNXX/AA5c3JzSCDwsT1iX8OWW/NOWP7oDuqdRFODFAQZj5raM/wCpPDEZXFxzvnc6lSCIyuLn57knUlM4IwwZILUzMARBdhYTtuVmbhhINrKsTjK3ERhsfLwgB6lGX2ePoOAsKSnLnhx3yTWVgeblVbEA0203HKBpSReCxpXK+uioY8T7mQ+WPkpPB1aSkD4ZmmTDkx3+0rnmkqZvElcXOJ32QO4nNrGl8zQXO33+iaUT4xF4TA1pb8I39UkoxZoW9U57WeJG4tezuBBQPL3ySXrHVmtxU9O6zgLOeNvQISr62+an8NjTHI4We++nslIu8ho1QdLb2w530Tno3T2vBlk838K/S+mhoD5QCfVMaotpGGoZkWDuGgkHHugIkmZTwlz3YWNGZXn5eqOqaxpJAiGTWkfyg+pV8la4XGBgOTEPT/qtQeioRDFM5+ENLviB8qalxte1jZIYT2m+i4epzUTHQluMDyE7e6Bh1PqDKKOwOKY6A6JLTwS1Uvj+ORIc78oCWR8shkkcXOcbklGdJbI6UhvlQMniRhDZgA+18tD7LlgdUwcxr4sL/e/C8/V1MrbNY2wv5/mQFEYhe9jt7rrXbEYTu3hcF9lnO9rGYi6xBy9fdBeokbHHiclRcXuOAHPPJagS1cl3G4HGgR1NSNYQTqgzoYZ7XIAbZGgEZHVEABuiFqy83ENr/EePZALX1IY3w2ea6XMjfI6zQSSjoenvk7pP86lMKakbH/ZBhTU8sLB4rQPbREZNF3GwRLiGMOM2YNTwlcNU2aZzXnIG7PX3QFWLjjIwjZvCsDfNVJz9VLnZBcFYVNRHTxnnhVq5xDEXDzXsEDBTy18xc42HxHhALI90ry92f2RVHTOcMZZcJuzp8TGhjW9vPJRkcTIm4WtzQLo2YW8chR5xgsb5d1lV1cTavwYzeI+Z3B3AW+WEYfa3CBNUQ4ZLMFwjukUrHSEyHvAuB6LR8QNyVlUAwsbLE4te3MEIHz5GQQl73BrQNSvNdS6g+sfuIx5W/crOsrZ6zD4tg1ujRkL8odjcTrIIGF2iNpYhh9VeCIWF1rIxzSDD5vX7oNGg5AKlVEHttutWEYe1R2YQJ4og6YMcbAm116elp46WENaLC178pQ+EG+LQoaWum8I04kuwZYjqQgK6r1EykwwO7Bk5/KHpJQ6PBIAQ05XQR0WkGpQMZJGxNLnaccoeKCSsfikOFuw4C1FP4sl3vxb2RzWtYAAgoIGtADcnt8pWrH4srWeNWqHMIDqVQ0ECNzvEGpB0HCDaqrAw+FH5tzwpEbsz1/lLYGFzrnMnPMJjHk2yDT8SICC7y3sTwizK0M8S/wCWc78hKqyxhN0CyV4AYXOw6gHRAxnM1c/Cw4Idhyux9IsReYtOtwpSuxWCaNvbJAMYXRDC4lw2ch6icU7DjzdsOUbPK1jMFrkpZ+BdNPZ8twd+UGNLTy182Jxszf0CfxxMhjAjGQyuqxRthYGMbYDJXudkFhc6JbX15kJp6d1jo5/HoFh1WvOIx07iCMnOCWQuIfcWuUDOm6VHI28kndwEYKT8Mywkc9vLtlaiBwAnhEySshjL5DZu6Be8tjBc82aNUqqZ31LwGjtv2t5RdTEZzjYewm4ZwjqGgbAzE/ukcMzx6IEhpZQQ0tzP+EXHQvgP5gsSE7bE0G4ZmEJ1WrZFAYjnI7T09UAzRbJaDJDUcwkYGk941HKIJQVcCO4f25XQ8EYt9/RS9s+Etqpg+S0Zy+L/AOkF6ypxOwN8u6kNBLJHjcLDYIjpdCJfzZR2g2A3Tp2EWDRayDzn4CYNL9grRsEbcRNgU6qJ46eIySGw0A5PCRyRGa748wT5eEBYzy19F2mqmvcYpD3g9vqqlLZT+Y73QMq6r8O8cZu7c/Kl7G4nZ5+vKpGMTrI+JlmoJHHZutjseCtmvAyeMPLefZTIC505Wbo/E7nZOHl9EElBLSSLDYISOG77nRGNOLI6jUcLuHVByKcUsjQb+GdxsjamsjgixhweSLtHKV1x7QEEBcIDYJXyzF8huTuj76JfSiwRzTYXQbUlYJHOilNpBofmCH6n1G14YHEnRzuPQJfWZvxIca5IOkaWNyUz6fQE2kfku9PodJJfomkj44oy57sLAM0EfJHFES44Q0f2SGtrX1Ug2jByb91SuqjVS4sOFo8o9Fg0Xcga0zuwImKsET2xyu7HG2L5UHALNClU3Gy31QMOoV0dMzC0YpCO0H+Sk8BjmlxTuu46k7oQ5GyIooXTTDDsgdx0lM5uTADbJw1CwlYYThvlzyjYwY4yCltVUxVbxELljTc//RQB1dQXEsZpv6orpdDc+LM3t2aVKOia6Yl7wbZgJsLAADQIKyMs7HHlIBY3+IcLKSsiihLyTwWnW/CtUTsgjMj9BsNSvP1MxnlMhyJ2GyCVVQ+pkL3ZDYcK9LJhyQq1hNj9EBNRO1oLW+ZCNY55ujnRtcc9VtDCAbhBSmpGAXcL5LWQCMfKNPdal4Y250Gp4SuqqTO7I2aDl6oDBc53y4VhohqaZ0jbOGbcrojVBwgu0Nis31AjaQ4Wf8q7LN4TT/hDRQSVb7k25KDIl8xLjn9lvR0rpXXIsEfBE22AjC9urfuiWhrRlsgydTsYy7Be2qHDvEzBxD5uVSvrdY4XZfE4IWkdK0lrWOI3tsg1qm4slhFHqjnNvmMxyVUgNBJQa0tewMLJ3YXN0PIQFdWPqn55Mb5W8LCVwc8kKoFzZBGi5sioYr6ZHYqQx5IloNrBB1h+EbajhXI7VwAD3UKBfNGcRI+qM6fUtpj4Uws12j+FHDc6BBVL2vf2aIDeo9Q8W8URszd3KBhNnhZLSMdyBkHEjtNnbFbx9TjEZ8UYZG5Fo39kEHhjLlBSvL3F2yDSqqH1Mhe7IbDhYtFyuLSMZoOYL6areJuLtH1V2MuFfwmEZXv6IL3sh4al0Mjg5t23/stnaIGTzlAY9z6pwv2x7eqKip4WtuGYkup3Yc00iuWXG6C+FuEg5N4QtS9sRtvbJazTiJtrXdfJY4w7NwuTr6oBoIX1Ml36JtGBG0Nj0CwglY0YLWvoiLG3d7hBx7cYxtNnjQoCprS8eHH2n4ypW1trxwm4+IpeLk5IGVJHGw5910yFhoLBLqFrnAYtUbJI2Jpc82ACDOpbhjLkqmkkmcG4fYIkVTp5CSLN2bwtoneG7xDogDFC7ALnuOyOo6NsY/M13HKJZheA9oxB26wq6sQAtAxSHIBBhU4IZvDbvmPQK1rFBNgnmcXhuIn4if4RjYpo2DxgPcFB1Q6X4zXDogqioLuxnl3QSoqS/tZputqWgc9viSZDYK9DQF1pZchsE0DsgBoEC6Pp95MTvKFatp44QJGty0si5p2Qxl79OOUqFU+aa7shoBwgHJdM8BuZJsAmcXT2si7u551PCrTGON5JbYn4kwvitbTjlAHD0+MElxy44QL42xTOhab4c7o2urhEDHH5zv8AKl0MEsrrg/U7oCmiwXV0xSxgeKG+7dFzXa6DKTb6oR3nUUQEM8h9kT079N37lFEAlX/Vu90Q3QKKIM6nyN/cEdP/AEzv2LqiBIVpTfqhRRA4Pmi9/sUL1Y9sf1UUQC0uqMO/soogv0v9KT9yAk/q5P3H+VFEDWm8gWz/ACH2UUQK6z9L6BCQfrs9wuqIH7dAofP9FFECfq39SP2hCxecKKIDx5T7Imh/oG+zvuoogTO3R/T/AChcUQMKn+nf+1LKzQe/+1FEH//Z"
            alt="Banner Image"
            className="journal-banner"
          />
        </div>
        <div className="paper-content">
          <p className='date-para'>{Date}</p>
          <textarea
            autoFocus
            id="journalContent"
            value={Writeup}
            onChange={(e) => {
              setWriteUp(e.target.value);
            }}
            placeholder='Start writing about your day. I hope it was good'></textarea>
        </div>
      </div>
      <div className="letter"></div>
      <div className="letter"></div>
      <div className="profile_add_button_div">
        <button
          onClick={handleSubmit}
          type="submit"
          className="profile_createnew_button"
        >
          <VscSaveAs
            width={100}
            height={100}
            className="profile_createnew_addicon"
          />
        </button>
      </div>
    </main>
  )
}

export default page