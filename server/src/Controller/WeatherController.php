<?php

namespace App\Controller;

use App\Controller\Resources\WeatherForecastResource;
use App\Controller\Resources\WeatherResource;
use DateInterval;
use DateTime;
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
        $weather = new WeatherResource(30, "cloudy", new DateTime());
        return $this->json($weather);
    }

    /**
     * @Route("/forecast", name="forecast")
     */
    public function forecast(): Response
    {
        $forecast = new WeatherForecastResource();

        {
            $date = new DateTime();
            $date->add(new DateInterval("P1D"));
            $weather = new WeatherResource(30, "sunny", $date);
            $forecast->forecast[] = $weather;
        }
        {
            $date = new DateTime();
            $date->add(new DateInterval("P2D"));
            $weather = new WeatherResource(29, "cloudy", $date);
            $forecast->forecast[] = $weather;
        }
        {
            $date = new DateTime();
            $date->add(new DateInterval("P3D"));
            $weather = new WeatherResource(28, "sunny", $date);
            $forecast->forecast[] = $weather;
        }

        return $this->json($forecast);
    }
}
