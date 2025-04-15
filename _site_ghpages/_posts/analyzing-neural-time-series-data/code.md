```python
import math
import numpy as np
import matplotlib.pyplot as plt
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
plt.plot(time, sine_wave)
plt.title('Sine wave')
plt.xlabel('Time')
plt.ylabel('Amplitude')
plt.grid(True, which='both')
plt.axhline(y=0, color='k')
plt.show()
```


    
<figure><img alt="image_alt" src="/images/2021/ants/output_3_0.png" height="80%" width="80%"><figcaption align="center"></figcaption></figure>    


We want to create a guassian with a full width at half maximum (FWHM), where the FWHM is the width of a line shape at half of its maximum amplitude, as shown below:

<figure><img alt="image_alt" src="/images/2021/ants/FWHM.svg" height="80%" width="80%"><figcaption align="center"></figcaption></figure>

```python
# defining the gaussian
# full width at half maximum
fwhm = 0.5
gaussian = np.exp((-4 * np.log(2) * (time)**2) / (fwhm**2))
```


```python
plt.plot(time, gaussian, 'y')
plt.title('Gaussian')
plt.xlabel('Time')
plt.ylabel('')
plt.grid(True, which='both')
plt.axhline(y=0, color='k')
plt.show()
```


    
<figure><img alt="image_alt" src="/images/2021/ants/output_6_0.png" height="80%" width="80%"><figcaption align="center"></figcaption></figure>    



```python
# element-wise multiplication of the sine and gaussian
morlet_wavelet = sine_wave * gaussian
```


```python
# viola! a morlet
plt.plot(time, morlet_wavelet, 'g')
plt.title('Morlet Wavelet')
plt.xlabel('Time')
plt.ylabel('Amplitude')
plt.grid(True, which='both')
plt.axhline(y=0, color='k')
plt.show()
```


    
<figure><img alt="image_alt" src="/images/2021/ants/output_8_0.png" height="80%" width="80%"><figcaption align="center"></figcaption></figure>    



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


    
<figure><img alt="image_alt" src="/images/2021/ants/output_9_0.png" height="80%" width="80%"><figcaption align="center"></figcaption></figure>    



```python
pnts = time.shape[0]
mwX = 2 * abs(np.fft.fft(morlet_wavelet)/pnts)
hz = np.linspace(start = 0, stop = srate, num = pnts)
```


```python
plt.plot(hz, mwX, 'b')
plt.title('DFT')
plt.xlabel('Hz')
plt.ylabel('DFT Values')
plt.grid(True, which='both')
plt.axhline(y=0, color='k')
plt.show()
```


    
<figure><img alt="image_alt" src="/images/2021/ants/output_11_0.png" height="80%" width="80%"><figcaption align="center"></figcaption></figure>    



```python
# zoomed in version
plt.plot(hz, mwX, 'b')
plt.title('DFT')
plt.xlabel('Hz')
plt.ylabel('DFT Values')
plt.grid(True, which='both')
plt.axhline(y=0, color='k')
plt.show()
```


    
<figure><img alt="image_alt" src="/images/2021/ants/output_12_0.png" height="80%" width="80%"><figcaption align="center"></figcaption></figure>    


Links:

https://pythontic.com/visualization/charts/sinewave
