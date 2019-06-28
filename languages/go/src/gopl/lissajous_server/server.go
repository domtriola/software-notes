// Exercise from http://www.gopl.io/

// Example URL:
// http://localhost:8000/?cycles=3&res=0.0005&size=300&delay=8&nframes=64

package main

import (
	"image"
	"image/color"
	"image/gif"
	"io"
	"log"
	"math"
	"math/rand"
	"net/http"
	"net/url"
	"strconv"
)

func main() {
	http.HandleFunc("/", rootHandler)
	log.Fatal(http.ListenAndServe("localhost:8000", nil))
}

func rootHandler(w http.ResponseWriter, r *http.Request) {
	q := r.URL.Query()
	params := formatParams(q)

	lissajous(w, params)
}

func formatParams(q url.Values) (params map[string]interface{}) {
	params = make(map[string]interface{})

	for key, values := range q {
		if len(values) != 1 {
			log.Printf("Key: %s does not have exactly one value (%v). Skipping...\n", key, values)
		}

		value := values[0]
		intValue, err := strconv.Atoi(value)

		if err != nil {
			floatValue, err := strconv.ParseFloat(value, 64)
			if err != nil {
				log.Printf("Query param %s has invalid value: %v\n", key, value)
			} else {
				params[key] = floatValue
			}
		} else {
			params[key] = intValue
		}
	}

	return params
}

/*
 * Lissajous
 ********************/

var palette = []color.Color{
	color.RGBA{0x00, 0x00, 0x00, 0xff},
	color.RGBA{0xff, 0x00, 0x00, 0xff},
	color.RGBA{0x00, 0xff, 0x00, 0xff},
	color.RGBA{0x00, 0x00, 0xff, 0xff},
}

const (
	whiteIndex = 0
	blackIndex = 1
)

func lissajous(out io.Writer, urlParams map[string]interface{}) {
	defaultParams := map[string]interface{}{
		"cycles":  5,
		"res":     0.001,
		"size":    100,
		"nframes": 64,
		"delay":   8,
	}

	params := merge(defaultParams, urlParams)
	cycles := params["cycles"].(int)
	res := params["res"].(float64)
	size := params["size"].(int)
	nframes := params["nframes"].(int)
	delay := params["delay"].(int)

	log.Printf("params: %v\n", params)

	freq := rand.Float64() * 3.0
	anim := gif.GIF{LoopCount: nframes}
	phase := 0.0
	for i := 0; i < nframes; i++ {
		rect := image.Rect(0, 0, int(2*size+1), int(2*size+1))
		img := image.NewPaletted(rect, palette)
		for t := 0.0; t < float64(cycles*2)*math.Pi; t += res {
			x := math.Sin(t)
			y := math.Sin(t*freq + phase)
			img.SetColorIndex(size+int(x*float64(size)+0.5), size+int(y*float64(size)+0.5), uint8(rand.Intn(3)+1))
		}
		phase += 0.1
		anim.Delay = append(anim.Delay, delay)
		anim.Image = append(anim.Image, img)
	}
	gif.EncodeAll(out, &anim)
}

func merge(a map[string]interface{}, b map[string]interface{}) (r map[string]interface{}) {
	r = make(map[string]interface{})

	for key, value := range a {
		r[key] = value
	}
	for key, value := range b {
		r[key] = value
	}

	return r
}
