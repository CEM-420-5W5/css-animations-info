"use client";

import { Button } from "@/components/ui/button";
import { CarreAvecFleche } from "@/components/CarreAvecFleche";

export default function Home() {

  const ANIMATION_DURATION_MS = 1000;

  const toutAnimer = async () => {
    await animerTranslate();
    await animerRotation();
    await animerScale();
    await animerColor();
    await animerOpacity();
  };

  const animer = async (elementId:string, keyframes: Keyframe[], duration:number = ANIMATION_DURATION_MS, garderLesValeursFinales:boolean = false) => {
    const element = document.getElementById(elementId);

    let animation = element?.animate(keyframes, { duration: duration, fill: garderLesValeursFinales ? 'forwards' : 'none' });
    await animation?.finished;
  };

  const animerRotation = async () => {
    const rotationKeyframes: Keyframe[] = [
      { transform: 'rotate(180deg)' }
    ];

    await animer(`rotate`, rotationKeyframes);
  };

  const animerTranslate = async () => {
    const translationKeyframes: Keyframe[] = [
      { transform: 'translateX(0%)' },
      { transform: 'translateX(100%)' },
      { transform: 'translateX(0%)' }
    ];

    await animer(`translate`, translationKeyframes);
  };

  const animerScale = async () => {
    const scaleKeyframes: Keyframe[] = [
      { transform: 'scale(1)' },
      { transform: 'scale(1.5)' },
      { transform: 'scale(1)' }
    ];

    await animer(`scale`, scaleKeyframes);
  };

  const animerColor = async () => {
    const colorKeyframes: Keyframe[] = [
      { backgroundColor: 'blue' },
      { backgroundColor: 'yellow' },
      { backgroundColor: 'blue' }
    ];

    await animer(`color`, colorKeyframes);
  };

  const animerOpacity = async () => {
    const opacityKeyframes: Keyframe[] = [
      { opacity: 1 },
      { opacity: 0 },
      { opacity: 1 }
    ];

    await animer(`opacity`, opacityKeyframes);
  };

  const animerAvecOffsets = async () => {
    await animerOffset1();
    await animerOffset2();
    await animerOffset3();
    await animerOffset4();
  };

  const animerOffset1 = async () => {
    const translationKeyframes: Keyframe[] = [
      { transform: 'translateX(0%)'},
      { transform: 'translateX(100%)', offset: 0.5 },
      { transform: 'translateX(0%)'}
    ];

    await animer(`offset1`, translationKeyframes);
  };

  const animerOffset2 = async () => {
    const translationKeyframes: Keyframe[] = [
      { transform: 'translateX(0%)', offset: 0 },
      { transform: 'translateX(100%)', offset: 0.75 },
      { transform: 'translateX(0%)', offset: 1 }
    ];

    await animer(`offset2`, translationKeyframes);
  };

  const animerOffset3 = async () => {
    const translationKeyframes: Keyframe[] = [
      { transform: 'translateX(0%)', offset: 0 },
      { transform: 'translateX(100%)', offset: 0.9 },
      { transform: 'translateX(0%)', offset: 1 }
    ];

    await animer(`offset3`, translationKeyframes);
  };

  const animerOffset4 = async () => {
    const translationKeyframes: Keyframe[] = [
      { transform: 'translateX(0%)', offset: 0 },
      { transform: 'translateX(50%)', offset: 0.4 },
      { transform: 'translateX(100%)', offset: 0.5 },
      { transform: 'translateX(50%)', offset: 0.6 },
      { transform: 'translateX(0%)', offset: 1 }
    ];

    await animer(`offset4`, translationKeyframes);
  };

  const animerAvecEase = async () => {
    animerSansEase();
    animerEase1();
    animerEase2();
    animerEase3();
  };

  const animerSansEase = async () => {
    // L'easing d'un keyframe s'applique au segment qui part de ce keyframe
    const translationKeyframes: Keyframe[] = [
      { transform: 'translateX(0%)', easing: 'linear' },
      { transform: 'translateX(200%)' }
    ];

    await animer(`ease0`, translationKeyframes, 4000, true);
  };

  const animerEase1 = async () => {
    // L'easing d'un keyframe s'applique au segment qui part de ce keyframe
    const translationKeyframes: Keyframe[] = [
      { transform: 'translateX(0%)', easing: 'ease-in' },
      { transform: 'translateX(200%)' }
    ];

    await animer(`ease1`, translationKeyframes, 4000, true);
  };

  const animerEase2 = async () => {
    const translationKeyframes: Keyframe[] = [
      { transform: 'translateX(0%)', easing: 'ease-out' },
      { transform: 'translateX(200%)' }
    ];

    await animer(`ease2`, translationKeyframes, 4000, true);
  };

  const animerEase3 = async () => {
    const translationKeyframes: Keyframe[] = [
      { transform: 'translateX(0%)', easing: 'ease-in-out' },
      { transform: 'translateX(200%)' }
    ];

    await animer(`ease3`, translationKeyframes, 4000, true);
  };

  // fill: 'forwards' garde l'état final de l'animation après sa fin
  const animerAvecFill = async () => {
    const element = document.getElementById(`forward`);

    const keyframes: Keyframe[] = [
      { transform: 'translateX(0%) rotate(0deg)' },
      { transform: 'translateX(100%) rotate(180deg)' }
    ];

    const animation = element?.animate(keyframes, {
      duration: ANIMATION_DURATION_MS,
      fill: 'forwards'
    });
    await animation?.finished;
  };

  return (
    <div>
      <div className="p-2">
        <h1 className="mb-8">Animations</h1>
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
        <Button className="mr-2" onClick={animerAvecOffsets}>Comprendre les offsets</Button>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">0.5 (par défaut)</span>
          <CarreAvecFleche id="offset1" />
        </div>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">0.75</span>
          <CarreAvecFleche id="offset2" />
        </div>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">0.9</span>
          <CarreAvecFleche id="offset3" />
        </div>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Accélération au centre</span>
          <CarreAvecFleche id="offset4" />
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
        <Button className="mr-2" onClick={animerAvecEase}>Comprendre le ease</Button>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Sans Ease (linéaire)</span>
          <CarreAvecFleche id="ease0" />
        </div>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Ease In</span>
          <CarreAvecFleche id="ease1" />
        </div>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Ease Out</span>
          <CarreAvecFleche id="ease2" />
        </div>
        <div className="flex items-center">
          <span className="w-28 text-right pr-2">Ease In-Out</span>
          <CarreAvecFleche id="ease3" />
        </div>
      </div>

      
      
    </div>
  );
}
