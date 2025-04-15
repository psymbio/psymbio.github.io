```python
import math
import numpy as np
import matplotlib.pyplot as plt
plt.rcParams["figure.figsize"] = (8,3)
```


```python
srate = 1000
# changed time from [-1,1] to [-2,2] to get a better guassian resolution
time = np.linspace(start = -2, stop = 2, num = 1000)
freq = 2 * np.pi
```


```python
# using euler's to ceneter the sine at zero (it looks okay)
sine_wave = np.cos(2 * np.pi * freq * time) - 0.1 * np.sin(2 * np.pi * freq * time)
```


```python
def plot_signal(x, y, title, x_label = "Time", y_label = "Amplitude", zoom = "no"):
    plt.plot(x, y, color = "#9F0D06")
    plt.title(title)
    plt.xlabel(x_label)
    plt.ylabel(y_label)
    plt.grid(True, which='both')
    # plt.axhline(y=0, color='k')
    if zoom == "yes":
        plt.margins(x=0, y=-0.001)
        plt.xlim(0,40)
    plt.show()
```


```python
plot_signal(time, sine_wave, "Sine wave")
```


    
<figure><img alt="image_alt" src="/images/2021/ants/basic-morlet-code/output_4_0.png" height="100%" width="100%"><figcaption align="center"></figcaption></figure>    


We want to create a guassian with a full width at half maximum (FWHM), where the FWHM is the width of a line shape at half of its maximum amplitude, as shown below:

<figure><img alt="image_alt" src="/images/2021/ants/basic-morlet-code/FWHM.svg" height="100%" width="100%"><figcaption align="center"></figcaption></figure>

```python
# defining the gaussian
# full width at half maximum
fwhm = 0.5
gaussian = np.exp((-4 * np.log(2) * (time)**2) / (fwhm**2))
```


```python
plot_signal(time, gaussian, "Gaussian")
```


    
<figure><img alt="image_alt" src="/images/2021/ants/basic-morlet-code/output_7_0.png" height="100%" width="100%"><figcaption align="center"></figcaption></figure>    



```python
# element-wise multiplication of the sine and gaussian
morlet_wavelet = sine_wave * gaussian
```


```python
plot_signal(time, morlet_wavelet, "Morlet Wavelet")
```


    
<figure><img alt="image_alt" src="/images/2021/ants/basic-morlet-code/output_9_0.png" height="100%" width="100%"><figcaption align="center"></figcaption></figure>    



```python
# looking at everything at once.
plt.plot(time, sine_wave)
plt.plot(time, gaussian, 'y')
plt.plot(time, morlet_wavelet, 'g')
plt.title('Morlet Wavelet')
plt.xlabel('Time')
plt.ylabel('Amplitude')
plt.grid(True, which='both')
plt.axhline(y=0, color='k')
plt.show()
```


    
<figure><img alt="image_alt" src="/images/2021/ants/basic-morlet-code/output_10_0.png" height="100%" width="100%"><figcaption align="center"></figcaption></figure>    



```python
pnts = time.shape[0]
mwX = 2 * abs(np.fft.fft(morlet_wavelet)/pnts)
hz = np.linspace(start = 0, stop = srate, num = pnts)
```


```python
plot_signal(hz, mwX, "DFT", "Hz", "DFT Values")
```


    
<figure><img alt="image_alt" src="/images/2021/ants/basic-morlet-code/output_12_0.png" height="100%" width="100%"><figcaption align="center"></figcaption></figure>    



```python
plot_signal(hz, mwX, "DFT", "Hz", "DFT Values", "yes")
```


    
<figure><img alt="image_alt" src="/images/2021/ants/basic-morlet-code/output_13_0.png" height="100%" width="100%"><figcaption align="center"></figcaption></figure>    



```python
import pandas as pd

time_series = pd.read_csv("data.csv")
time_series_values = time_series["value"].to_numpy()
```


```python
time_series_values = np.append(time_series_values, time_series_values)
time_series_values = np.append(time_series_values, time_series_values)
time_series_values = np.append(time_series_values, time_series_values)
```


```python
time_series_time = np.linspace(start = 0, stop = 100, num = len(time_series_values))
```


```python
plot_signal(time_series_time, time_series_values, "Signal")
```


    
<figure><img alt="image_alt" src="/images/2021/ants/basic-morlet-code/output_17_0.png" height="100%" width="100%"><figcaption align="center"></figcaption></figure>    



```python
convoluted_signal = np.convolve(time_series_values, morlet_wavelet, 'full')
plot_signal(time_series_time, convoluted_signal[:len(time_series_time)], "Convoluted Signal")
```


    
<figure><img alt="image_alt" src="/images/2021/ants/basic-morlet-code/output_18_0.png" height="100%" width="100%"><figcaption align="center"></figcaption></figure>    



```python
x1 = np.zeros(30)
x2 = np.ones(10)
x3 = np.zeros(40)
x4 = np.ones(10)*2
x5 = np.ones(10)*-1
time_series_values_2 = np.array([])

time_series_values_2 = np.append(time_series_values_2, x1)
time_series_values_2 = np.append(time_series_values_2, x2)
time_series_values_2 = np.append(time_series_values_2, x3)
time_series_values_2 = np.append(time_series_values_2, x4)
time_series_values_2 = np.append(time_series_values_2, x2)
time_series_values_2 = np.append(time_series_values_2, x5)
time_series_values_2 = np.append(time_series_values_2, x2)

time_series_time_2 = np.linspace(0, 25, len(time_series_values_2))

plot_signal(time_series_time_2, time_series_values_2, "Random Noise")
```


    
<figure><img alt="image_alt" src="/images/2021/ants/basic-morlet-code/output_19_0.png" height="100%" width="100%"><figcaption align="center"></figcaption></figure>    



```python
kernel_new = np.exp(-np.linspace(-2,2,20)**2)
kernel_new = kernel_new / np.sum(kernel_new)
# try these
# kernel_new = -1 * kernel_new
kernel_time = np.linspace(0, 20, 20)
plot_signal(kernel_time, kernel_new, "Guassian Kernel")
```


    
<figure><img alt="image_alt" src="/images/2021/ants/basic-morlet-code/output_20_0.png" height="100%" width="100%"><figcaption align="center"></figcaption></figure>    



```python
# smooths out the signal
convoluted_signal = np.convolve(time_series_values_2, kernel_new, 'full')
plot_signal(time_series_time[:len(convoluted_signal)], convoluted_signal, "Convoluted Signal")
```


    
<figure><img alt="image_alt" src="/images/2021/ants/basic-morlet-code/output_21_0.png" height="100%" width="100%"><figcaption align="center"></figcaption></figure>    



```python
# let's try building the edge detecting kernel

kernel_edge = np.array([])
x6 = np.zeros(5)
x7 = np.ones(1)
x8 = np.zeros(1)
x9 = np.ones(1) * -1

kernel_edge = np.append(kernel_edge, x6)
kernel_edge = np.append(kernel_edge, x7)
kernel_edge = np.append(kernel_edge, x8)
kernel_edge = np.append(kernel_edge, x9)
kernel_edge = np.append(kernel_edge, x6)

kernel_time_edge = np.linspace(0, 5, len(kernel_edge))
plot_signal(kernel_time_edge, kernel_edge, "Edge Kernel")
```


    
<figure><img alt="image_alt" src="/images/2021/ants/basic-morlet-code/output_22_0.png" height="100%" width="100%"><figcaption align="center"></figcaption></figure>    



```python
# signed edge detecting kernel

convoluted_signal = np.convolve(time_series_values_2, kernel_edge, 'full')
plot_signal(time_series_time[:len(convoluted_signal)], convoluted_signal, "Convoluted Signal")
```


    
<figure><img alt="image_alt" src="/images/2021/ants/basic-morlet-code/output_23_0.png" height="100%" width="100%"><figcaption align="center"></figcaption></figure>    


Links:

[graph stuff](https://pythontic.com/visualization/charts/sinewave)
[time-series-or-signal-in-python](https://stackoverflow.com/questions/36286566/how-to-generate-noisy-mock-time-series-or-signal-in-python)
[random time series generator](http://mbonvini.github.io/TimeSeriesMaker/)
[Edge Detecting Kernel](https://www.cs.princeton.edu/courses/archive/fall08/cos429/lecture_linear_filters_edge_detection.pdf)
[](https://homepages.inf.ed.ac.uk/rbf/HIPR2/log.htm)
