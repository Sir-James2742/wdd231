const np = document.querySelector('#np');
const bronze = document.querySelector('#bronze');
const silver = document.querySelector('#silver');
const gold = document.querySelector('#gold');

const dialogBox = document.querySelector("#myModal");
const closeButton = document.querySelector('#closeModal');
const dialogBoxText = document.querySelector('#myModal div');

np.addEventListener("click", () => {
    dialogBoxText.innerHTML = `<p>This membership is tailored for non-profit
        organizations aiming to collaborate, gain visibility, and support community initiatives</p>
        <h3>Benefits</h3>
        <ul>
            <li>Free or discounted membership fees</li>
             <li>Listing in the directory under non-profit category</li>
             <li>Promotion of community events and initiatives</li>
        </ul>`;
    dialogBox.showModal();
});
bronze.addEventListener("click", () => {
    dialogBoxText.innerHTML = `<p>Bronze Membership is perfect for small or startup businesses wanting to
     join the chamber and gain basic exposure.</p>
     <h3>Benefits</h3>
     <ul>
      <li>Standard listing in the business directory</li>
      <li>Access to selected networking events</li>
      <li>Opportunities to attend training sessions</li>
      </ul>`;
    dialogBox.showModal();
});
silver.addEventListener("click", () => {
    dialogBoxText.innerHTML = `<p>Silver Membership is ideal for growing businesses looking to expand their reach and build strong connections.</p>
    <h3>Benefits</h3>
    <ul>
    <li>Highlighted listing in the business directory</li>
    <li>Access to networking events</li>
    <li>Participation in chamber workshops and training</li>
    </ul>`;
    dialogBox.showModal();
});
gold.addEventListener("click", () => {
    dialogBoxText.innerHTML = `<p>Gold Membership is our premium tier designed for established businesses seeking maximum visibility and influence within the chamber.</p>
    <h3>Benefits</h3>
    <ul>
    <li>Featured spotlight placement on the homepage</li>
    <li>Priority listing in the business directory</li>
    <li>Access to exclusive networking events</li>
    </ul>`;
    dialogBox.showModal();
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});