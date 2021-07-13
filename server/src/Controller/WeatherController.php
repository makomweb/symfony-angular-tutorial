<?php

namespace App\Controller;

use App\Controller\Resources\WeatherForecastResource;
use App\Controller\Resources\WeatherResource;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WeatherController extends AbstractController
{
    /**
     * @Route("/today", name="today")
     */
    public function today(): Response
    {
        $weather = new WeatherResource(30, "sunny");
        return $this->json($weather);
    }

    /**
     * @Route("/forecast", name="forecast")
     */
    public function forecast(): Response
    {
        $forecast = new WeatherForecastResource();

        {
            $weather = new WeatherResource(30, "sunny");
            $forecast->week[] = $weather;
        }
        {
            $weather = new WeatherResource(29, "cloudy");
            $forecast->week[] = $weather;
        }
        {
            $weather = new WeatherResource(28, "sunny");
            $forecast->week[] = $weather;
        }

        return $this->json($forecast);
    }
}
