import { useState, useRef } from "react";
import { useInputState } from "@mantine/hooks";
import { TextInput, InputBase, Button, Stack, Grid } from "@mantine/core";
import { IMaskInput } from "react-imask";
import { useBetween } from "use-between";
import useCraeteRoute from "../../../hooks/createRouteHook";
import useMainView from "../../../hooks/mainViewHook";
import * as databaseHandler from "../../../database/databaseHandler";

import "@mantine/core/styles.css";
import styles from "./AddressInputView.module.css";
import useDatabases from "../../../hooks/databaseHook";

export function AddressInputView({ toggleAddNewAddress }) {
  const [newAddress, setNewAddress] = useState({
    name: "",
    street: "",
    hnr: "",
    plz: "",
    place: "",
    info: "",
  });

  const useSharedDatabases = () => useBetween(useDatabases);
  const { addressesList, setIsNewAddress } = useSharedDatabases();

  // const useSharedCreateRoute = () => useBetween(useCraeteRoute);
  // const { setIsNewAddress } = useSharedCreateRoute();

  const useSharedMainView = () => useBetween(useMainView);
  const { setShowMassage, setMassageContent } = useSharedMainView();

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

  function getNewAddress() {
    const add = {
      name: nameValue,
      street: streetValue,
      hnr: hnrValue,
      plz: plzValue,
      place: placeValue,
      info: infoValue === "" ? null : infoValue,
    };
    console.log(add);
    setNewAddress(add);
  }

  function handelOnClickSaveBtn() {
    checkInput();
    console.log(nameValue);
    console.log(streetValue);
    console.log(hnrValue);
    console.log(plzValue);
    console.log(placeValue);
    if (!checks.includes(false)) {
      if (
        addressesList.find((address) => address.name === nameValue) ===
        undefined
      ) {
        // getNewAddress();
        console.log(newAddress);
        databaseHandler.persistNewAddress({
          name: nameValue,
          street: streetValue,
          hnr: hnrValue,
          plz: plzValue,
          place: placeValue,
          info: infoValue,
        });
        setIsNewAddress(true);
        cleanInputFields();
        toggleAddNewAddress();
      } else {
        setMassageContent("addressNameIsExisting");
        setShowMassage(true);
      }
    }
  }

  const handelOnClickCancelBtn = () => {
    toggleAddNewAddress();
  };

  return (
    <Stack>
      <TextInput
        ref={nameRef}
        label="Name"
        placeholder="Name"
        value={nameValue}
        onChange={setNameValue}
        max={100}
        error={false}
        classNames={{ label: styles.label }}
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
      <Button className={styles.safeBtn} onClick={handelOnClickSaveBtn}>
        Speichern
      </Button>
      <Button className={styles.cancelBtn} onClick={handelOnClickCancelBtn}>
        Abbrechen
      </Button>
    </Stack>
  );
}
