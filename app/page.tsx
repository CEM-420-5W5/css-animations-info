"use client";

import { Button } from "@/components/ui/button";
import { CarreAvecFleche } from "@/components/CarreAvecFleche";

export default function Home() {

  const ANIMATION_DURATION_MS = 1000;

  const toutAnimerSimple = async () => {
    animerTranslateSimple();
    animerRotationSimple();
    animerScaleSimple();
    animerColorSimple();
    animerOpacitySimple();
  };

  const toutAnimer = async () => {
    await animerTranslate();
    await animerRotation();
    await animerScale();
    await animerColor();
    await animerOpacity();
  };

  
  const jouerAnimationSimple = (elementId: string, classe: string) => {
    const element = document.getElementById(elementId);
    element?.classList.add(classe);
  };

  const jouerAnimationAvecFix = (elementId: string, classe: string) => {
    const element = document.getElementById(elementId);
    element.classList.remove(classe);
    // Forcer le reflow pour que l'animation puisse être relancée
    // Ou en language plus simple, un hack JS qui fonctionne particulièrement bien si vous n'oubliez pas de faire brûler des poils de chats dans la flamme d'une chandelle à chaque plein lune (chandelle et poils de chat non inclus)
    void element.offsetWidth;
    element?.classList.add(classe);
  };

  const jouerAnimationAvecCallback = (elementId: string, classe: string, callback: () => void) => {
    const element = document.getElementById(elementId);
    if (!element) {
      return;
    }

    element.classList.add(classe);

    element.addEventListener('animationend', () => {
      element.classList.remove(classe);
      callback();
    }, { once: true });
  };

  const animerRotationSimple = async () => {
    await jouerAnimationSimple(`rotate`, `anim-rotate`);
  };

  const animerTranslateSimple = async () => {
    await jouerAnimationSimple(`translate`, `anim-translate`);
  };

  const animerScaleSimple = async () => {
    await jouerAnimationSimple(`scale`, `anim-scale`);
  };

  const animerColorSimple = async () => {
    await jouerAnimationSimple(`color`, `anim-color`);
  };

  const animerOpacitySimple = async () => {
    await jouerAnimationSimple(`opacity`, `anim-opacity`);
  };

  const animerRotation = async () => {
    await jouerAnimationAvecFix(`rotate`, `anim-rotate`);
  };

  const animerTranslate = async () => {
    await jouerAnimationAvecFix(`translate`, `anim-translate`);
  };

  const animerScale = async () => {
    await jouerAnimationAvecFix(`scale`, `anim-scale`);
  };

  const animerColor = async () => {
    await jouerAnimationAvecFix(`color`, `anim-color`);
  };

  const animerOpacity = async () => {
    await jouerAnimationAvecFix(`opacity`, `anim-opacity`);
  };


  const animerAvecCallback = async () => {
    jouerAnimationAvecCallback(`callback`, `anim-translate`, () => {
      // La 2e animation est déclenchée dans le callback de la 1re animation
      jouerAnimationAvecCallback(`callback`, `anim-rotate`, () => {/* Rien à faire ici, juste pour montrer la séquence */});
    });
  }

  // La classe anim-forward utilise "forwards" pour garder l'état final
  const animerAvecFill = async () => {
    await jouerAnimationAvecFix(`forward`, `anim-forward`);
  };

  return (
    <div>
      <div className="p-2">
        <h1 className="mb-8">Animations avec CSS</h1>
        <Button className="mr-2" onClick={toutAnimerSimple}>Tout Animer (Simple)</Button>
        <Button className="mr-2" onClick={toutAnimer}>Tout Animer</Button>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Translation</span>
          <CarreAvecFleche id="translate" />
        </div>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Rotation</span>
          <CarreAvecFleche id="rotate" />
        </div>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Échelle</span>
          <CarreAvecFleche id="scale" />
        </div>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Couleur</span>
          <CarreAvecFleche id="color" />
        </div>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Opacité</span>
          <CarreAvecFleche id="opacity" />
        </div>
      </div>
      <div className="p-2">
        <Button className="mr-2" onClick={animerAvecFill}>Garder la position (forwards)</Button>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Translation + rotation</span>
          <CarreAvecFleche id="forward" />
        </div>
      </div>

      <div className="p-2">

        <Button className="mr-2" onClick={animerAvecCallback}>Animer une séquence avec un callback</Button>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Avec callback</span>
          <CarreAvecFleche id="callback" />
        </div>
        <p style={{ color: 'red' }}>Il y a un bug si on clique sur le bouton pendant l'animation de rotation!</p>
      </div>
    </div>
  );
}
