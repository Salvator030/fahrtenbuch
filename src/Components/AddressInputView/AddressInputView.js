import { useState, useRef } from "react";
import { useInputState } from "@mantine/hooks";
import { TextInput, InputBase, Button, Stack, Grid } from "@mantine/core";
import { IMaskInput } from "react-imask";
import * as databaseHandler from "../../Database/databaseHandler";
import "@mantine/core/styles.css";
import styles from "./AddressInputView.module.css";

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
  const [plzValue, setPlzValue] = useInputState("0");
  const [placeValue, setPlaceValue] = useInputState("");
  const [infoValue, setInfoValue] = useInputState("");

  const nameRef = useRef(null);
  const streetRef = useRef(null);
  const hnrRef = useRef(null);
  const plzRef = useRef(null);
  const placeRef = useRef(null);

  function cleanInputFields() {
    setNameValue("");
    setStreetValue("");
    setHnrValue("");
    setPlzValue("");
    setPlaceValue("");
    setInfoValue("");
  }

  var checks = [false, false, false, false, false];
  const refs = [nameRef, streetRef, hnrRef, placeRef];

  function checkInput() {
    for (let i = 0; i < 4; i++) {
      console.log(refs[i]);
      if (refs[i].current.value === "") {
        checks[i] = false;
        refs[i].current.style.borderColor = "red";
      } else {
        checks[i] = true;
        refs[i].current.style.borderColor = "black";
      }
    }

    if (plzRef.current.element.value === "") {
      checks[4] = false;
      plzRef.current.element.style.borderColor = "red";
    } else {
      checks[4] = true;
      plzRef.current.element.style.borderColor = "black";
    }
  }

  function setNewAddress() {
    console.log(!checks.includes(false));
    newAddress.name = nameValue;
    newAddress.street = streetValue;
    newAddress.hnr = hnrValue;
    newAddress.plz = plzValue;
    newAddress.place = placeValue;
    if (infoValue === "") {
      newAddress.info = null;
    } else {
      newAddress.info = infoValue;
    }

    console.log(newAddress);
    databaseHandler.persistNewAddress(newAddress);
  }

  function handelSaveBtn() {
    checkInput();
    if (!checks.includes(false)) {
      setNewAddress();
    }
    cleanInputFields();
  }

  return (
    <Stack >
      <TextInput
        ref={nameRef}
        label="Name"
        placeholder="Name"
        value={nameValue}
        onChange={setNameValue}
        max={100}
        error={false}
        classNames={{label: styles.label,}}
      />
      <Grid>
        <Grid.Col span={9}>
          <TextInput
            ref={streetRef}
            label="Straße"
            placeholder="Straße"
            value={streetValue}
            onChange={setStreetValue}
            max={100}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <TextInput
            ref={hnrRef}
            label="Hnr"
            placeholder="Hnr"
            value={hnrValue}
            onChange={setHnrValue}
            max={5}
          />
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col span={3}>
          <InputBase
            ref={plzRef}
            label="PLZ"
            onChange={setPlzValue}
            component={IMaskInput}
            mask="00000"
            placeholder="PLZ"
            name="plz"
          />
        </Grid.Col>{" "}
        <Grid.Col span={9}>
          <TextInput
            ref={placeRef}
            label="Ort"
            placeholder="Ort"
            value={placeValue}
            onChange={setPlaceValue}
            max={50}
          />{" "}
        </Grid.Col>
      </Grid>
      <TextInput
        label="Info"
        placeholder="Info"
        value={infoValue}
        onChange={setInfoValue}
        max={255}
      />
      <Button className={styles.safeBtn} onClick={setNewAddress}>
        Speichern
      </Button>
    </Stack>
  );
}
