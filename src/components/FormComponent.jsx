export default function FormComponent(){

    const submitDetails=(formData)=>{

        const userName = formData.get('name')
        const email = formData.get('email')
        const password = formData.get('password');
        const genre = formData.getAll('genre');
        const mood = formData.get('mood');
        const age = formData.get('age');
        
        console.log('UserName: ',userName);
        console.log('Email: ',email);
        console.log('Password: ',password);
        console.log('Genre: ',genre);
        console.log('Mood: ', mood);
        console.log('Age: ', age)

    }
    return (
        
          <form action={submitDetails} id="details-form">
            <label htmlFor="name">Username: </label>
            <input type="text" name="name" id="name" placeholder="Joe Rogan"/>

            <label htmlFor="email">Email </label>
            <input type="email" id="email" name="email" placeholder="joe.rogan@email.com"/>

            <label htmlFor="password">Password </label>
            <input type="password" id="password" name="password"/>

            <label htmlFor="about">About Yourself:</label>
            <textarea id="about"></textarea>

            <fieldset>
                <legend>Favorite genre :</legend>
                <label>
                <input type="checkbox" value="action" name="genre"/>Action</label>
                <label>
                <input type="checkbox" value="comedy"  name="genre"/>Comedy</label>
                <label>
                <input type="checkbox" value="drama"  name="genre"/>Drama</label>
                <label>
                <input type="checkbox" value="horror"  name="genre" />Horror</label>
                <label>
                <input type="checkbox" value="scifi"  name="genre"/>Scifi</label>
                <label>
                <input type="checkbox" value="fantasy"  name="genre"/>Fantasy</label>
                <label>
                <input type="checkbox" value="romance"  name="genre"/>Romance</label>
                <label>
                <input type="checkbox" value="mystery"  name="genre"/>Mystery</label>
                <label>
                <input type="checkbox" value="thriller"  name="genre"/>Thriller</label>
                <label>
                <input type="checkbox" value="animation"  name="genre"/>Animation</label>
                <label>
                <input type="checkbox" value="documentary"  name="genre"/>Documentary</label>
            </fieldset>

            <fieldset>
                <legend>Current mood: </legend>
                <label>
                <input type="radio" name="mood" value="happy"/>Happy</label>
                <label>
                <input type="radio" name="mood" value="sad"/>Sad</label>
                <label>
                <input type="radio" name="mood" value="relaxed"/>Relaxed</label>
                <label>
                <input type="radio" name="mood" value="energetic"/>Energetic</label>
                <label>
                <input type="radio" name="mood" value="romantic"/>Romantic</label>
                <label>
                <input type="radio" name="mood" value="adventurous"/>Adventurous</label>
                <label>
                <input type="radio" name="mood" value="nostalgic"/>Nostalgic</label>
                <label>
                <input type="radio" name="mood" value="curious"/>Curious</label>
            </fieldset>


            <label htmlFor="age">Age:</label>
            <select id="age" name="age">
                <option>Select age </option>
                <option value="child">Child</option>
                <option value="teenager">Teenager</option>
                <option value="young adult">Young Adult</option>
                <option value="adult">Adult</option>
                <option value="senior citizen">Senior Citizen</option>
            </select> 

            
            <button>Submit</button>

{/* 
            
            
           

            */}
          </form>
          
        
    )
}