import nagarasound from "../tunes/nagara.mp3";
import tabala1sound from "../tunes/tabala1.mp3";
import tabala2sound from "../tunes/tabala2.wav";
import taal1sound from "../tunes/taal1.wav";
import taal2sound from "../tunes/taal2.mp3";
import dhol1sound from "../tunes/dhol1.mp3";
import dhol2sound from "../tunes/dhol2.wav";
import dhol3sound from "../tunes/dhol3.mp3";
import dhol4sound from "../tunes/dhol4.mp3";
import octapad1sound from "../tunes/octapad1.mp3";
import octapad2sound from "../tunes/octapad2.wav";
import octapad3sound from "../tunes/octapad3.wav";
import octapad4sound from "../tunes/octapad4.wav";
import octapad5sound from "../tunes/octapad5.mp3";
import octapad6sound from "../tunes/octapad6.wav";
import octapad7sound from "../tunes/octapad7.wav";
import octapad8sound from "../tunes/octapad8.mp3";
import key1sound from "../tunes/keyboard/key01.mp3";
import key2sound from "../tunes/keyboard/key02.mp3";
import key3sound from "../tunes/keyboard/key03.mp3";
import key4sound from "../tunes/keyboard/key04.mp3";
import key5sound from "../tunes/keyboard/key05.mp3";
import key6sound from "../tunes/keyboard/key06.mp3";
import key7sound from "../tunes/keyboard/key07.mp3";
import key8sound from "../tunes/keyboard/key08.mp3";
import key9sound from "../tunes/keyboard/key09.mp3";
import key10sound from "../tunes/keyboard/key10.mp3";
import key11sound from "../tunes/keyboard/key11.mp3";
import key12sound from "../tunes/keyboard/key12.mp3";
import key13sound from "../tunes/keyboard/key13.mp3";
import key14sound from "../tunes/keyboard/key14.mp3";
import key15sound from "../tunes/keyboard/key15.mp3";
import key16sound from "../tunes/keyboard/key16.mp3";
import key17sound from "../tunes/keyboard/key17.mp3";
import key18sound from "../tunes/keyboard/key18.mp3";
import key19sound from "../tunes/keyboard/key19.mp3";
import key20sound from "../tunes/keyboard/key20.mp3";
import key21sound from "../tunes/keyboard/key21.mp3";
import key22sound from "../tunes/keyboard/key22.mp3";
import key23sound from "../tunes/keyboard/key23.mp3";
import key24sound from "../tunes/keyboard/key24.mp3";
import React from "react";
const Tunecontext = React.createContext({
  drumkittune: [
    taal1sound,
    taal2sound,
    dhol1sound,
    dhol2sound,
    dhol3sound,
    dhol4sound,
  ],
  nagaratune: nagarasound,
  tabalatune: [tabala1sound, tabala2sound],
  octapadtune: [
    octapad1sound,
    octapad2sound,
    octapad3sound,
    octapad4sound,
    octapad5sound,
    octapad6sound,
    octapad7sound,
    octapad8sound,
  ],
  keyboardtune: [
    key1sound,
    key2sound,
    key3sound,
    key4sound,
    key5sound,
    key6sound,
    key7sound,
    key8sound,
    key9sound,
    key10sound,
    key11sound,
    key12sound,
    key13sound,
    key14sound,
    key15sound,
    key16sound,
    key17sound,
    key18sound,
    key19sound,
    key20sound,
    key21sound,
    key22sound,
    key23sound,
    key24sound,
  ],
});
export default Tunecontext;
