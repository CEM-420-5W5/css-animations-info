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

  
  const jouerAnimationSimple = (elementId: string, classe: string, garderLaPositionFinale: boolean = false) => {
    const element = document.getElementById(elementId);
    element?.classList.add(classe);
  };

  // Déclenche une animation CSS (classe définie dans globals.css) et attend sa fin.
  // Retirer puis remettre la classe (avec un reflow) permet de relancer l'animation.
  const jouerAnimation = (elementId: string, classe: string, garderLaPositionFinale: boolean = false) => {
    return new Promise<void>((resolve) => {
      const element = document.getElementById(elementId);
      if (!element) {
        resolve();
        return;
      }

      element.classList.remove(classe);
      // Hackish: Forcer le reflow pour que l'animation puisse être relancée
      void element.offsetWidth;
      element.classList.add(classe);

      element.addEventListener('animationend', () => {
        if (!garderLaPositionFinale) {
          element.classList.remove(classe);
        }
        resolve();
      }, { once: true });
    });
  };

  const animerRotation = async () => {
    await jouerAnimation(`rotate`, `anim-rotate`);
  };

  const animerTranslate = async () => {
    await jouerAnimation(`translate`, `anim-translate`);
  };

  const animerScale = async () => {
    await jouerAnimation(`scale`, `anim-scale`);
  };

  const animerColor = async () => {
    await jouerAnimation(`color`, `anim-color`);
  };

  const animerOpacity = async () => {
    await jouerAnimation(`opacity`, `anim-opacity`);
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

  const animerRotationBug2 = async () => {
    await jouerAnimationSimple(`bug2`, `anim-rotate`);
  };

  const animerTranslationBug2 = async () => {
    await jouerAnimationSimple(`bug2`, `anim-translate`);
  };

  // La classe anim-forward utilise "forwards" pour garder l'état final
  const animerAvecFill = async () => {
    await jouerAnimation(`forward`, `anim-forward`, true);
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
        <Button className="mr-2" onClick={animerRotationBug2}>Rotation "bug" #2</Button>
        <Button className="mr-2" onClick={animerTranslationBug2}>Translation "bug" #2</Button>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Double animations...</span>
          <CarreAvecFleche id="bug2" />
        </div>
        
      </div>

      
      
    </div>
  );
}
