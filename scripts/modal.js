export const notFilledInsert = () => {
  return `
    <div class="modal__content">

        <span id="close-modal" class="close-modal">&times;</span>

        <h2>Please Fill Out All Fields In Form To Submit</h2>

        <div class="modal__content--not-filled">
            <img src="./images/fillform.jpg" alt="Please Fill Out All Fields"/>
        </div> <!-- closes modal__content--not-filled -->

    </div> <!-- closes modal__content -->
`;
};