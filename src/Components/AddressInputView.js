import { useState, useRef } from "react";
import { useInputState } from "@mantine/hooks";
import { TextInput, InputBase, Button } from "@mantine/core";
import { IMaskInput } from "react-imask";

export function AddressInputView() {
  let newAddress = {
    name: "",
    street: "",
    hnr: "",
    plz: "",
    place: "",
    info: "",
  };
  const [address, setAddress] = useState(newAddress);

  const [nameValue, setNameValue] = useInputState("");
  const [streetValue, setStreetValue] = useInputState("");
  const [hnrValue, setHnrValue] = useInputState("");
  const [plzValue, setPlzValue] = useInputState(0);
  const [placeValue, setPlaceValue] = useInputState("");
  const [infoValue, setInfoValue] = useInputState("");

  const nameRef = useRef(null);
  const streetRef = useRef(null);
  const hnrRef = useRef(null);
  const plzRef = useRef(null);
  const placeRef = useRef(null);

  function setNewAddress() {
    var check = true;
    const refs = [nameRef, streetRef, hnrRef, placeRef];
    refs.forEach((ref) => {
      if (ref.value === undefined) {
        check = false;
        ref.current.style.borderColor = "red";
      } else {
        check =true;
        ref.current.style.borderColor = "black";
      }
    });

    if (plzRef.current.element.value === "") {
        check =false;
      plzRef.current.element.style.borderColor = "red";
    } else {
        check = true;
      plzRef.current.element.style.borderColor = "black";
    }

    if (check) {
        newAddress.name = nameValue;
        newAddress.street = streetValue;
        newAddress.hnr = hnrValue;
        newAddress.plz = plzValue;
        if (infoValue === ""){
            newAddress.info = null;
        }
        else {
            newAddress.info = infoValue;
        }
    }
  }

  return (
    <>
      <TextInput
        ref={nameRef}
        label="Name"
        placeholder="Name"
        value={nameValue}
        onChange={setNameValue}
        max={100}
        error={false}
      />
      <TextInput
        ref={streetRef}
        label="Straße"
        placeholder="Straße"
        value={streetValue}
        onChange={setStreetValue}
        max={100}
      />
      <TextInput
        ref={hnrRef}
        label="Hnr"
        placeholder="Hnr"
        value={hnrValue}
        onChange={setHnrValue}
        max={5}
      />
      <InputBase
        ref={plzRef}
        label="PLZ"
        onChange={setPlzValue}
        component={IMaskInput}
        mask="00000"
        placeholder="PLZ"
        name="plz"
      />
      <TextInput
        ref={placeRef}
        label="Ort"
        placeholder="Ort"
        value={placeValue}
        onChange={setPlaceValue}
        max={50}
      />
      <TextInput
        label="Info"
        placeholder="Info"
        value={infoValue}
        onChange={setInfoValue}
        max={255}
      />
      <Button onClick={setNewAddress}>Speichern</Button>
    </>
  );
}
